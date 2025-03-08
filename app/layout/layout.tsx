import {Navbar} from "~/navbar/navbar";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}