import {
  Container,
  Divider,
  Box,
  Typography,
  FilledInput,
} from "@mui/material";
import ViewAllButton from "../component/ViewAllButton";
import OrangeButton from "../component/OrangeButton";

function CommentsSection() {
  return (
    <>
      <Container>
        <FilledInput
          disableUnderline
          fullWidth
          multiline
          minRows={5}
          sx={{
            borderRadius: "1.3rem",
            textTransform: "none",
            borderColor: "#7B90FF",
            borderWidth: "0.2rem",
            borderStyle: "solid",
            justifyContent: "center",
            height: "146px",
        
            fontSize: "1.125rem",
            fontWeight: "500",
            lineHeight: "1.375rem",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "0rem",
            color: "#210366",
            backgroundColor: "transparent",
          }}
          defaultValue="Write Your Comments"
          id="Comments"
        ></FilledInput>
      </Container>
      <Container
        sx={{
          textAlign: "end",
          marginBottom: "1rem",
        }}
      >
        <OrangeButton buttonName={"Login To Add Comments"} />
      </Container>
    </>
  );
}
export default CommentsSection;
