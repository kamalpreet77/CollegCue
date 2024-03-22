import React from "react";
import { Box, Container, Pagination} from "@mui/material";
import Divider from "@mui/material/Divider";
import CountryFilter from "./components/CountryFilter";
import RatingFooter from "../../components/Cards/RatingFooter"
// import AllScholarshipCard from "./components/ScolarshipCard";
import ScholarshipCard from "./components/AllScolarshipCard";
import DropDownFilter from "./components/DropDownFilter";
import PageNameHeading from "../../components/Headings/PageNameHeading";
import BoldHeading from "../../components/Headings/BoldHeading";
import SearchBar from "../CourseFinder/SearchBar";

const Scholarship = () => {
  return (
    <Container
      sx={{
        padding: "2rem 0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        marginTop: "1rem",
      }}
    >
      {/* study Abroad */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BoldHeading>Scholarships to study Abroad</BoldHeading>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CountryFilter />
          <DropDownFilter />
        </Box>
      </Box>

      {/* Scholarship Section */}
      <section>
        <Box>
        <BoldHeading variant="h2">Found 527 Scholarships</BoldHeading>
        <Divider sx={{marginBottom: "10px"}}/>
        </Box>
       
        <ScholarshipCard/>
        <RatingFooter/>
        {/* <AllScholarshipCard /> */}
      </section>

      {/* Pagination */}
      <Pagination
        count={10}
        sx={{
          alignItems: "center",
          "& .css-wjh20t-MuiPagination-ul": {
            width: "fit-content",
            margin: "0 auto",
          },
        }}
      />
    </Container>
  );
};

export default Scholarship;
