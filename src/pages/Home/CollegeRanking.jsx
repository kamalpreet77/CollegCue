import { Container, Box, Stack, Typography } from "@mui/material";
import { ClgRankTable } from "./ClgRankTable";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import Heading from "../../components/Headings/Heading";
import Courses from "../../components/Buttons/Courses";

export const CollegeRanking = () => {
  const Agencies = [
    {
      label: 'NIRF',
      link: "/coming-soon",
    },
    {
      label: 'State',
      link: "/coming-soon",
    },
    {
      label: 'QS Ranking',
      link: "/coming-soon",
    },
    {
      label: 'Business Today',
      link: "/coming-soon",
    },
  ];

  return (
    <>
      <Container>
        <Box sx={{ margin: "2rem 0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              justifyContent: "space-between",
              alignItems : 'center'
            }}
          >
            <Box
              sx={{ width: "fit-content", marginBottom: "1rem" }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: "3rem",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#210366",
                  display: "inline",
                }}
              >Collage Ranking
              </Typography>
              <Box
                sx={{
                  borderTop: "6px solid #7B90FF", borderRadius: "10px", display: "flex", width: "100%",
                }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems : "center"
            }}>
            <Typography sx={{
              margin: "2rem 0",
              fontSize: "2rem",
              color: "#210366",
            }}>
              Agencies:
            </Typography>
            <Stack direction="row" flexWrap="wrap" sx={{ margin: "1rem", rowGap: "1rem" }}>
              {Agencies.map((Agencies, index) => {
                return <Courses key={index} dt={Agencies.label} link={Agencies.link}></Courses>;
              })}
            </Stack>
            <ClgRankTable />
          </Box>
        </Box>
      </Container>
    </>
  );
};
