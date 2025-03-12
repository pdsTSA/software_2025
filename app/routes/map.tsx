import type {Route} from "./+types/map";
import {styled} from "@mui/system";
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {Paper} from "@mui/material";
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";

const MapPins = () => {
    const [pins, setPins] = useState<Report[] | null>(null)

    const leafletMap = useMapEvents({
        locationfound(e: any) {
            leafletMap.setView(e.latlng, leafletMap.getZoom())

            fetch("http://localhost:5000/reports?sw=33.9507083%20-84.2241268&ne=33.9527083%20-84.2201268")
                .then((e) => e.json().then(
                    (e) => setPins(e)
                ))
        }
    })

    useEffect(() => {
        leafletMap.locate()
    }, []);

    if (pins === null) {
        return null
    } else {
        return (
            pins.map((e: Report) => {
                return <Marker position={{lat: e.latitude, lng: e.longitude}} key={e.id}>
                    <Popup>You are here</Popup>
                </Marker>
            })
        )
    }
}

export default function Map() {
    return (
        <div>
            <Paper>
                <MapContainer center={[0, 0]} zoom={15} scrollWheelZoom={true} style={{
                    width: "100%", height: `90vh`}}>
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
