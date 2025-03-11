import {NavLink} from "react-router";
import {styled} from "@mui/system";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";


const NavbarBody = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    
    > h1, a, button {
        padding: 0;
        font-size: large;
    }
`

const NavbarLinks = styled('div')`
    display: flex;
    gap: 20px;
`

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
                    Clean Up Service
                </Typography>
                <Button color="inherit">Upload</Button>
                <NavLink to={"/map"}><Button color="inherit">Map</Button></NavLink>
                <NavLink to={"/projects"}><Button color="inherit">Projects</Button></NavLink>
                <NavLink to={"/about"}><Button color="inherit">About</Button></NavLink>
            </Toolbar>
        </AppBar>
    )
}

const locations = [
    {
        element: <NavLink to={"/"} end><Button>Upload</Button></NavLink>
    },
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