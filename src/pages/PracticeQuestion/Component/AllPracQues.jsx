import { Box, Container, Grid, Typography } from "@mui/material";
import questions from "../Data/DataPractQues.js";
import PracticeQues from "./PracticeQues.jsx";
import FoundQues from "./FoundQues.jsx";
import image from "../Image/pana.png";
const AllQuesAns = () => {
  return (
    <Container>
       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#2F1370",
                  fontWeight: "600",
                  fontSize: "2.25rem",
                  paddingTop: "0.5rem",
                  justifyContent: "flex-start",
                }}
              >
                {" "}
                List of Practice Questions{" "}
              </Typography>
              <Box sx={{
                 width:"10rem",
                 height:"10rem",
                 background:"black",
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                 objectFit:"cover",
                 objectPosition:"center",
              }}>
              <img
                src={image}
                alt="List of practice question"
                loading="lazy"
              />
              </Box>
            </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FoundQues />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
           
            {questions.map((answer, index) => {
              return <PracticeQues key={index} {...answer} />;
            })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllQuesAns;
