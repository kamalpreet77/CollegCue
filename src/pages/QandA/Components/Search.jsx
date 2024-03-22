import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchBar from "./SearchBar";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Search = () => {
  const [question, setQuestion] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Searching for:", question);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        marginTop: "2rem",
        paddingTop: "1rem",
        justifyContent: "space-between",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          rowGap: "1rem",
        }}
      >
        <input
          style={{
            height: "52px",
            width: "18rem",
            padding: "1px 2px",
            borderRadius: "10px",
            border: "1px solid #d9d9d9", // Light grey color
            marginBottom: ["1rem", "0"],
            outline: "none",
            cursor: "pointer",
            bgcolor: "#FFFFF",
            textIndent: "25px", // Remove outline on focus
          }}
          type="text"
          placeholder="Search Questions"
          value={question}
          onChange={handleChange}
        />
      </Box>
      <Box
        style={{
          width: "100%",
          maxWidth: "350px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            color: "white",
            background: "#FF7900",
            fontSize: "0.875rem",
            fontWeight: "400",
            display: "inline-block",
            textAlign: "center",
            padding: "0.375rem 0.75rem",
            width: "150px",
            borderRadius: "30px",
            height: "40px",
          }}
          onClick={handleOpen}
        >
          Add Question
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            write a question
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Writehere"
              variant="outlined"
            />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box>
        <Select
          value={question}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            background: "white",
            borderRadius: "20px",
            border: "1px #c7c7c7 solid",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
            width: "253px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          <MenuItem value="">
            <em>Sort By:Most Relevant</em>
          </MenuItem>
          <MenuItem value={10}>last year</MenuItem>
          <MenuItem value={20}>Most common</MenuItem>
          <MenuItem value={30}>Most frequent</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Search;
