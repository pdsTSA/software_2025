interface UploadModalTypes {
    open: boolean,
    toggleOpen: (arg0: boolean) => void;
}

interface LatLng {
    lat: number,
    lng: number
}

interface LocationMarkerTypes {
    updatePosition: (arg0: LatLng) => void
}