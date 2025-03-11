import {Navbar} from "~/navbar/navbar";
import {Outlet} from "react-router";
import {type ThemeOptions, ThemeProvider} from "@mui/system";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}