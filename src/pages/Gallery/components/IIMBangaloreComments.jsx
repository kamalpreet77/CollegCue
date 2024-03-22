import {
  Container,
  Divider,
  Box,
  Typography,
  FilledInput,
} from "@mui/material";
import ViewAllButton from "../Button/ViewAllButton";
import OrangeButton from "../Button/OrangeButton";

function IIMBangaloreComments() {
  return (
    <Box
      sx={{
        borderRadius: "1.75rem",
        height: "18.375rem",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        margin: "1rem 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            marginTop: "0.8rem",
            marginLeft: "0.8rem",
            fontSize: "1 rem",
            fontWeight: "700",
            lineHeight: "2.25rem",
            color: "#210366",
            letterSpacing: "0em",
          }}
        >
          Comments
        </Typography>
        <ViewAllButton />
      </Container>
      <Container >
        <Divider />
        <FilledInput disableUnderline fullWidth multiline minRows={5} sx={{
          borderRadius: '1.3rem',
          textTransform: "none",
          borderColor: '#7B90FF',
          borderWidth: '0.2rem',
          borderStyle: 'solid',
          justifyContent: 'center',
          height: "146px",
          fontSize: '1.125rem',
          fontWeight: '500',
          lineHeight: '1.375rem',
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          letterSpacing: '0rem',
          color: '#210366',
          backgroundColor: 'transparent',
        }}
          placeholder="Write Your Comments"
          id="Comments">
        </FilledInput>
      </Container>
      <Container
        sx={{
          textAlign: "end",
        }}>

        <OrangeButton buttonName={"Login To Add Comments"} />
      </Container>
    </Box>
  );
}
export default IIMBangaloreComments;