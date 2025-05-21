import {NavLink} from "react-router";
import {styled} from "@mui/system";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useState} from "react";


export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to={"/"}>
                        CreekWatch
                    </NavLink>
                </Typography>
                <NavLink to={"/map"}><Button color="inherit">Map</Button></NavLink>
                <NavLink to={"/projects"}><Button color="inherit">Projects</Button></NavLink>
                <NavLink to={"/about"}><Button color="inherit">About</Button></NavLink>
            </Toolbar>
        </AppBar>
    )
}

const locations = [
    {
       element: <NavLink to={"/map"} end>Map</NavLink>
    },
    {
        element: <NavLink to={"/cleanup"} end>Projects</NavLink>
    },
    {
        element: <NavLink to={"/about"} end>About</NavLink>
    }
]