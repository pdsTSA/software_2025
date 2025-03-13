import type {ISuspender} from "~/components/suspense";

export interface LatLng {
    lat: number,
    lng: number
}

export interface BoundingBox {
    _southWest: LatLng,
    _northEast: LatLng
}

export interface PollutionReport {
    latitude: number,
    longitude: number,
    file_name: string,
    timestamp: string,
    id: number
}
