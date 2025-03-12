import {useState} from "react";
import {Dialog} from "@mui/material";

export const UploadModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog></Dialog>
    )
}