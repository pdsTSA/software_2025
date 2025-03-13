import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {Paper} from "@mui/material";
import "leaflet/dist/leaflet.css";
import {Suspense, useEffect, useState} from "react";
import {createSuspender} from "~/components/suspense";
import type {BoundingBox, PollutionReport} from "~/components/types/global.types";

const ReportPin = ({file, promise, position, addToCache, cacheUrl}: any) => {
    let url: string | undefined;

    if (cacheUrl == null) {
        const raw = promise.read();

        url = URL.createObjectURL(raw)

        useEffect(() => {
            addToCache(file, url)
        }, []);
    } else {
        url = cacheUrl;
    }

    return (
        <Marker position={position}>
            <Popup>
                <img src={url} alt={"The image"}/>
            </Popup>
        </Marker>
    )
}

interface Cache {
    [key: string]: string
}

const MapPins = () => {
    const [pins, setPins] = useState<PollutionReport[] | null>(null)
    const [cache, updateCache] = useState<Cache>({});

    const fetchPins = () => {
        const box: BoundingBox = leafletMap.getBounds();

        const sw = box._southWest.lat + "%20" + box._southWest.lng;
        const ne = box._northEast.lat + "%20" + box._northEast.lng;

        fetch(`http://localhost:5000/reports?sw=${sw}&ne=${ne}`)
            .then((e) => e.json().then(
                (e) => setPins(e)
            ))
    }

    const leafletMap = useMapEvents({
        locationfound(e: any) {
            leafletMap.setView(e.latlng, leafletMap.getZoom())
            fetchPins()
        },
        moveend(e: any) {
            fetchPins()
        }
    })

    useEffect(() => {
        leafletMap.locate()
    }, []);

    const fetchPin = async (promise: Promise<Response>) => {
        const response = await promise;
        return await response.blob();
    }

    const addToCache = (file_name: string, blobUrl: string) => {
        updateCache({...cache, [file_name]: blobUrl})
    }

    if (pins === null) {
        return null
    } else {
        return (
            <Suspense>
                {pins.map((e) => {
                    if (e.file_name in cache) {
                        return <ReportPin position={{lat: e.latitude, lng: e.longitude}}
                                          promise={null} key={e.id}
                                          file={e.file_name}
                                          addToCache={addToCache}
                                          cacheUrl={cache[e.file_name]}/>
                    } else {
                        const promise = fetch(`http://localhost:5000/image?file_name=${e.file_name}`)

                        if (promise == undefined) return;

                        return <ReportPin position={{lat: e.latitude, lng: e.longitude}}
                                          promise={createSuspender(fetchPin(promise))} key={e.id}
                                          file={e.file_name}
                                          addToCache={addToCache}
                                          cacheUrl={null}/>
                    }
                })}
            </Suspense>
        )
    }
}

export default function Map() {
    return (
        <div>
            <Paper>
                <MapContainer center={[0, 0]} zoom={15} scrollWheelZoom={true} style={{
                    width: "100%", height: `90vh`
                }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapPins/>
                </MapContainer>
            </Paper>
        </div>
    )
}
