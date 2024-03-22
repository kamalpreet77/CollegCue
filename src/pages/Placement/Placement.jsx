import { Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import BasicTable from "./component/BasicTable";
import Alltable from "./component/Alltable";
import Highest from "./component/Highest";
import Faq from "./component/Faq";
import Barrtwo from "./component/Barrtwo";
import LabelingBar from "./component/LabelingBar";
import { placementsData, FaqData } from "../InstitutePage/Placement"

const Placement = () => {
  return (
    <>
      <Container>
        <BasicTable placementsData={placementsData} />
        <LabelingBar />
        <Barrtwo />
        <Faq FaqData={FaqData} />
      </Container>
    </>
  );
};
export default Placement;
