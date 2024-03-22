import { Box } from "@mui/material";
import RadioGroup from "../../components/RadioGroupRating";
import StudyAbroad from "./Components/StudyAbroad";

function QandA() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        width: "100%",
      }}
    >
      <StudyAbroad />
      <RadioGroup />
    </Box>
  );
}

export default QandA;
