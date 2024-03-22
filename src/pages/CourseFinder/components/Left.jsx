import { Grid } from "@mui/material";
import AllAnsSet from "../Left/AllAnswer";
import MainCard from "../Right/MainCard";

const Left = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={3}>
        <AllAnsSet />
      </Grid>
      <Grid item md={9}>
        <MainCard />
      </Grid>
    </Grid>
  );
};

export default Left;
