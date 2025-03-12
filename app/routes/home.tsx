import type {Route} from "./+types/home";
import {styled} from "@mui/system";
import {ColorBlock} from "~/components/color-block";
import { useTheme } from '@mui/material/styles';
import {Button} from "@mui/material";
import {UploadModal} from "~/components/upload-modal";
import {useState} from "react";
import {CloudUpload, FileUpload} from "@mui/icons-material";

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

const UploadSection = styled('div')`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UploadButton = styled('div')`
    border: 4px solid white;
    border-radius: 16px;
    padding: 20px;
    color: white;
    width: 50%;
    
    margin-top: 40px;
    margin-bottom: 40px;
    
    > h1 {
        font-size: xx-large;
    }
`

export default function Home() {
    const theme = useTheme();
    const [open, isOpen] = useState(false);

    return (
        <div>
            <UploadModal open={open} toggleOpen={isOpen} />
            <CoverImage>
                <SplashScreen>
                    <h1>Clean Up Service</h1>
                    <p>Saving creeks one picture at a time</p>
                </SplashScreen>
            </CoverImage>
            <ColorBlock color={theme.palette.primary.main}>
                <UploadSection>
                    <Button onClick={() => isOpen(true)}>
                        <UploadButton>
                            <h1>Upload Image</h1>
                        </UploadButton>
                    </Button>
                </UploadSection>
            </ColorBlock>
        </div>
    )
}
