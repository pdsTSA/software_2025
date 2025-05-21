import type { Route } from "./+types/home";
import { styled } from "@mui/system";
import { ColorBlock } from "~/components/color-block";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import { UploadModal } from "~/components/upload-modal";
import { useState } from "react";
import { CloudUpload, FileUpload } from "@mui/icons-material";
import { Typography, ListItem, ListItemText, List } from "@mui/material";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const CoverImage = styled('div')`
  background-size: cover;
  width: 100%;
  margin: 0;
  padding: 20% 10%;
  background-image: url("/creek.jpg");
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.3); 
  color: white;
  text-align: center;
`;

const ListStyled = styled(List)({
  marginTop: '1rem',
  paddingLeft: '20px',
});

const ListItemStyled = styled(ListItem)({
  marginBottom: '1.5rem',
});

const SplashScreen = styled('div')`
  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); \
  }

  > p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Section = styled('section')({
  padding: '2rem 0',
});

const UploadSection = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  color: "white",
  fontSize: '1.1rem',
});

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
`;

export default function Home() {
  const theme = useTheme();
  const [open, isOpen] = useState(false);

    return (
        <div>
            <UploadModal open={open} toggleOpen={isOpen} />
            <CoverImage>
                <SplashScreen>
                    <h1>CreekWatch</h1>
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
            <Section>
                <ListStyled>
                    <ListItemStyled>
                        <ListItemText primary="'Every day, we are losing vital natural resources due to waste and pollution. Immediate action is needed to restore and protect our environment for future generations.'" />
                    </ListItemStyled>
                    <ListItemStyled>
                        <ListItemText primary="– Environmental Protection Agency (EPA)" />
                    </ListItemStyled>
                </ListStyled>
            </Section>
        </div>
    )
}