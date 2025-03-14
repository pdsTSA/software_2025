import type { Route } from "./+types/about";
import { styled } from "@mui/system";
import { Box, Typography, Container, List, ListItem, ListItemText } from "@mui/material";

const Section = styled('section')({
  padding: '2rem 0',
});

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  color: '#2C3E50',
});

const CoverImage = styled('div')`
    background-size: cover; 
    width: 100%;
    margin: 0;
    padding: 15% 20px 15% 10%;
`;

const SplashScreen = styled('div')`
    > h1 {
        font-size: xxx-large;
        font-weight: bold;
        color: white;
    }
    
    > p {
        font-size: xx-large;
    }
`;

const ListStyled = styled(List)({
  marginTop: '1rem',
  paddingLeft: '20px',
});

const ListItemStyled = styled(ListItem)({
  marginBottom: '1.5rem', // Consistent margin between each FAQ item
});

const QuestionText = styled(Typography)({
  fontWeight: 'bold',
  color: '#2980B9',
  fontSize: '1.1rem',
});

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: 'white',
});

const AnswerText = styled(Typography)({
  marginTop: '0.5rem',  // Adds consistent spacing between question and answer
  marginBottom: '0.5rem', // Adds consistent space after the answer
  paddingLeft: '1rem', // Adds consistent padding on the left for alignment
});

const About = () => {
  return (
    <Container>
      <CoverImage style={{ backgroundImage: 'url(https://raw.githubusercontent.com/pdsTSA/software_2025/master/public/creek.jpg)' }}>
        <SplashScreen>
          <h1>About</h1>
          <p><TitleText>Staying Informed</TitleText></p>
        </SplashScreen>
      </CoverImage>
      <Section>
        <Title variant="h2">Cleanup Tips</Title>
        <Typography variant="body1" paragraph>
          For a successful cleanup, it is important to come prepared. Here are some essentials that you should bring:
        </Typography>
        <ListStyled>
          <ListItemStyled>
            <ListItemText primary="Trash Bags" />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Nitrile or Latex Gloves" />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Hand Sanitizer or Disinfecting Wipes" />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Leather Gloves" />
          </ListItemStyled>
        </ListStyled>
      </Section>

      <Section>
        <Title variant="h2">Volunteer Coordination</Title>
        <Typography variant="body1" paragraph>
          It's important to divide volunteers into groups and assign specific tasks to ensure an organized and efficient cleanup effort. Consider grouping based on areas or types of waste to maximize efficiency.
        </Typography>
      </Section>

      <Section>
        <Title variant="h2">Frequently Asked Questions</Title>
        <ListStyled>
          <ListItemStyled>
            <ListItemText primary={<QuestionText>How relevant is my contribution?</QuestionText>} />
            <Box>
              <AnswerText>
                In the US alone, the production of waste equates to 268 million tons of waste — 140 million going into landfills — each year. Your contribution is the difference between trash on the streets and a higher amount of regulation of getting waste into said landfills and recyclables into their proper locations.
              </AnswerText>
            </Box>
          </ListItemStyled>

          <ListItemStyled>
            <ListItemText primary={<QuestionText>How do I dispose of waste properly?</QuestionText>} />
            <Box>
              <AnswerText>
                When in doubt, check product labels for disposal instructions and contact local waste management services for guidance. Otherwise, use available trash cans and recycling bins.
              </AnswerText>
            </Box>
          </ListItemStyled>

          <ListItemStyled>
            <ListItemText primary={<QuestionText>How do I determine if my material is waste?</QuestionText>} />
            <Box>
              <AnswerText>
                In general, all materials that cannot be recycled or composted will be waste, including hazardous materials and electronic waste.
              </AnswerText>
            </Box>
          </ListItemStyled>

          <ListItemStyled>
            <ListItemText primary={<QuestionText>What are the common rules about recycling?</QuestionText>} />
            <Box>
              <AnswerText>
                1) Recycle bottles, cans, paper, and cardboard. <br />
                2) Keep food and liquid out of your recycling. <br />
                3) No loose plastic bags and no bagged recyclables.
              </AnswerText>
            </Box>
          </ListItemStyled>
        </ListStyled>
      </Section>
    </Container>
  );
};

export default About;
