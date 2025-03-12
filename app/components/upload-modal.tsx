"use client"

import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, Paper} from "@mui/material";
import {VisuallyHiddenInput} from "~/components/hidden-input";
import {styled} from "@mui/system";
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {CloudUpload, Send} from "@mui/icons-material";


const FileUploadRow = styled('div')`
    display: flex;
    justify-content: center;
    width: 100%;
    align-content: center;
    gap: 20px;
    
    > p {
        align-content: center;
    }
`

const LocationMarker = ({updatePosition}: LocationMarkerTypes) => {
    const [position, setPosition] = useState<LatLng | null>(null)

    const map = useMapEvents({
        click(e: any) {
            setPosition(e.latlng);
            if (position !== null) {
                updatePosition(position)
            }
        },
        locationfound(e: any) {
            setPosition(e.latlng)
            map.setView(e.latlng, map.getZoom())
        },
    })

    useEffect(() => {
        map.locate()
    }, []);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export const UploadModal = ({open, toggleOpen}: UploadModalTypes) => {
    const handleClose = () => {
        toggleOpen(false)
        cleanup()
    }

    const handleFileUpload = (files: FileList | null) => {
        if (files == null) return;
        const file = files[0];

        if (file !== null) {
            setFile(file)
        }
    }

    const cleanup = () => {
        setFile(null)
        setPosition(null)
    }

    const [file, setFile] = useState<File | null>(null)
    const [position, setPosition] = useState<LatLng | null>(null);

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Upload Creek Pollution File</DialogTitle>
            <DialogContent>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: '100%',
                        gap: '10px'
                    }}
                >
                    <FileUploadRow>
                        <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                        >
                            Select file
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => handleFileUpload(event.target.files)}
                                multiple
                            />
                        </Button>
                        <p>{file?.name}</p>
                    </FileUploadRow>
                    <Paper>
                        <MapContainer center={[33.75, -84.38]} zoom={13} scrollWheelZoom={true} style={{
                            width: "100%", height: "400px"}}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker updatePosition={setPosition}/>
                        </MapContainer>
                    </Paper>
                    <FileUploadRow>
                        <Button startIcon={<Send/>}
                                variant={'contained'}
                                disabled={file === null || position === null}
                        >
                            Submit Report
                        </Button>
                    </FileUploadRow>
                </Box>
            </DialogContent>
        </Dialog>
    )
}