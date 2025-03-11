import type {Route} from "./+types/home";
import {styled} from "@mui/system";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

const CoverImage = styled('div')`
    background-size: cover;
    width: 100%;
    margin: 0;
    padding: 15% 20px 15% 10%;
`

const SplashScreen = styled('div')`
    > h1 {
        font-size: xxx-large;
        font-weight: bold;
    }
    
    > p {
        font-size: xx-large;
    }
`

export default function Home() {
    return (
        <div>
            <CoverImage>
                <SplashScreen>
                    <h1>Clean Up Service</h1>
                    <p>Saving creeks one picture at a time</p>
                </SplashScreen>
            </CoverImage>
        </div>
    )
}
