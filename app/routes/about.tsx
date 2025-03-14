import type { Route } from "./+types/about";
import { styled } from "@mui/system";
import { Typography, Container, Grid, List, ListItem, ListItemText } from "@mui/material";

const Section = styled('section')({
  padding: '0.5rem 0',
  backgroundColor: '#f9f9f9',
});

const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: '600',
  marginBottom: '2rem',
  color: '#34495e',
  textAlign: 'center',
});

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

const SplashScreen = styled('div')`
  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  > p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const QuestionText = styled(Typography)({
  fontWeight: '600',
  color: '#2980B9',
  fontSize: '1.2rem',
  marginBottom: '.5rem',
  marginLeft: '.5',
});

const TitleText = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.5rem',
  color: 'white',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
});

const AnswerText = styled(Typography)({
  marginTop: '0.75rem',
  marginBottom: '1.5rem',
  paddingLeft: '1.5rem',
  color: '#555',
  lineHeight: '1.6',
});

const ListStyled = styled(List)({
  marginTop: '1rem',
  paddingLeft: '0',
  width: '100%',
});

const ListItemStyled = styled(ListItem)({
  marginBottom: '1rem',
  borderBottom: '1px solid #eee',
  padding: '0.75rem 0',
});

const CleanupTipText = styled(Typography)({ // New style for cleanup tips
  fontSize: '1.1rem',
  color: '#333',
  lineHeight: '1.6',
});

const VolunteerCoordinationText = styled(Typography)({ // New style for volunteer coordination
  fontSize: '1.1rem',
  color: '#333',
  lineHeight: '1.6',
});

const About = () => {
  return (
    <div>
      <CoverImage>
        <SplashScreen>
          <h1>About</h1>
        </SplashScreen>
      </CoverImage>
      <Container maxWidth="md">
        <Section>
          <Title variant="h2">Cleanup Tips</Title>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <QuestionText>For a successful cleanup, it is important to come prepared. Here are some essentials that you should bring:</QuestionText>
              <CleanupTipText>Trash Bags</CleanupTipText>
              <CleanupTipText>Nitrile or Latex Gloves</CleanupTipText>
              <CleanupTipText>Hand Sanitizer or Disinfecting Wipes</CleanupTipText>
              <CleanupTipText>Leather Gloves</CleanupTipText>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Title variant="h2">Volunteer Coordination</Title>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ListItemText>It's important to divide volunteers into groups and assign specific tasks to ensure an organized and efficient cleanup effort. Consider grouping based on areas or types of waste to maximize efficiency.</ListItemText>
              <ListItemText>Effective volunteer coordination leads to a more efficient and impactful cleanup. By assigning tasks and responsibilities, you can ensure that all areas are covered and that the cleanup process is organized.</ListItemText>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Title variant="h2">Frequently Asked Questions</Title>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <QuestionText>How relevant is my contribution?</QuestionText>
              <AnswerText>
                In the US alone, the production of waste equates to 268 million tons of waste — 140 million going into landfills — each year. Your contribution is the difference between trash on the streets and a higher amount of regulation of getting waste into said landfills and recyclables into their proper locations.
              </AnswerText>
            </Grid>

            <Grid item xs={12}>
              <QuestionText>How do I dispose of waste properly?</QuestionText>
              <AnswerText>
                When in doubt, check product labels for disposal instructions and contact local waste management services for guidance. Otherwise, use available trash cans and recycling bins.
              </AnswerText>
            </Grid>

            <Grid item xs={12}>
              <QuestionText>How do I determine if my material is waste?</QuestionText>
              <AnswerText>
                In general, all materials that cannot be recycled or composted will be waste, including hazardous materials and electronic waste.
              </AnswerText>
            </Grid>

            <Grid item xs={12}>
              <QuestionText>What are the common rules about recycling?</QuestionText>
              <AnswerText>
                1) Recycle bottles, cans, paper, and cardboard. <br />
                2) Keep food and liquid out of your recycling. <br />
                3) No loose plastic bags and no bagged recyclables.
              </AnswerText>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </div>
  );
};

export default About;