import type {Route} from "./+types/home";
import {styled} from "@mui/system";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

const CoverImage = styled('div')`
    background-image: url("/creek.jpg");
    background-size: cover;
    width: 100%;
    margin: 0;
    padding: 15% 20px 15% 10%;
    background-blend-mode: multiply;
    background-color: rgba(8, 15, 50, 0.41);
`

const SplashScreen = styled('div')`
    display: flex;
    font-size: xxx-large;
    font-weight: bold;
`

export default function Home() {
    return (
        <div>
            <CoverImage>
                <SplashScreen>
                    <h1>Clean Up Service</h1>
                </SplashScreen>
            </CoverImage>
        </div>
    )
}
