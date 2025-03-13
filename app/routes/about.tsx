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

const ListStyled = styled(List)({
  marginTop: '1rem',
  paddingLeft: '20px',
});

const ListItemStyled = styled(ListItem)({
  marginBottom: '0.5rem',
});

const QuestionText = styled(Typography)({
  fontWeight: 'bold',
  color: '#2980B9',
  fontSize: '1.1rem',
});

const About = () => {
  return (
    <Container>
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
            <ListItemText
              primary={<QuestionText>How do I dispose of waste properly?</QuestionText>}
              sx={{ marginRight: '300px' }} // Add space between question and answer
            />
            <ListItemText>
              <Typography component="span">
                When in doubt, check product labels for disposal instructions and contact local waste management services for guidance. Otherwise, use available trash cans and recycling bins.
              </Typography>
            </ListItemText>
          </ListItemStyled>

          <ListItemStyled>
            <ListItemText
              primary={<QuestionText>How do I determine if my material is waste?</QuestionText>}
              sx={{ marginRight: '200px' }} // Add space between question and answer
            />
            <ListItemText>
              <Typography component="span">
                In general, all materials that cannot be recycled or composted will be waste, including hazardous materials and electronic waste.
              </Typography>
            </ListItemText>
          </ListItemStyled>

          <ListItemStyled>
            <ListItemText
              primary={<QuestionText>What are the common rules about recycling?</QuestionText>}             />
            <ListItemText>
              <Typography component="span">
                1) Recycle bottles, cans, paper and cardboard. <span style={{ display: 'block' }} />
                2) Keep food and liquid out of your recycling. <span style={{ display: 'block' }} />
                3) No loose plastic bags and no bagged recyclables.
              </Typography>
            </ListItemText>
          </ListItemStyled>

        </ListStyled>
      </Section>
    </Container>
  );
};

export default About;
