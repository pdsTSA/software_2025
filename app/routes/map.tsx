import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {Paper} from "@mui/material";
import "leaflet/dist/leaflet.css";
import {Suspense, useEffect, useState} from "react";
import {createSuspender} from "~/components/suspense";
import type {BoundingBox, PollutionReport} from "~/components/types/global.types";

const ReportPin = ({promise, position}: any) => {
    console.log(promise)
    const raw = promise.read();

    const url = URL.createObjectURL(raw)

    return (
        <Marker position={position}>
            <Popup>
                <img src={url} alt={"The image"}/>
            </Popup>
        </Marker>
    )
}

const MapPins = () => {
    const [pins, setPins] = useState<PollutionReport[] | null>(null)

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

    if (pins === null) {
        return null
    } else {
        return (
            <Suspense>
                {pins.map((e) => {
                    const promise = fetch(`http://localhost:5000/image?file_name=${e.file_name}`)

                    if (promise == undefined) return;

                    return <ReportPin position={{lat: e.latitude, lng: e.longitude}}
                                      promise={createSuspender(fetchPin(promise))} key={e.id}/>
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
