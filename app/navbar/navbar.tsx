import {NavLink} from "react-router";
import {Button} from "@mui/material";
import {styled} from "@mui/system";

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
        <NavbarBody>
            <h1>Clean Up Service</h1>
            <NavbarLinks>
                {locations.map(e => e.element)}
            </NavbarLinks>
        </NavbarBody>
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