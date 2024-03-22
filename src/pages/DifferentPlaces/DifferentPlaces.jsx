import React from "react";
import { Container } from "@mui/material";
import PageTitle from "../../components/Headings/PageTitle";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import FoundCollegeHeading from "./FoundCollegeHeading";
import Colleges from "./Colleges";
import DropDown from "./DropDown";

const DifferentPlaces = ({ place }) => {
  return (
    <Container maxWidth="lg">
      <PageTitle title={`Top Colleges`} />
      <TopCollegeHeading text={`List of colleges in ${place.name}`} />
      <DropDown />
      <FoundCollegeHeading place={place} />
      <Colleges />
    </Container>
  );
};

export default DifferentPlaces;
