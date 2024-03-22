import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

export default function MainHead() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "2rem",
        marginTop: "4rem",
        "@media (max-width: 800px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // bgcolor:"red",
          width: "100%",
          bgcolor: "#D9E4EC",
          gap: "2.5rem",
          border: "dashed 3px black",
          padding: "4rem 5rem",
          textAlign: "center",
        }}
      >
        <Box display="flex" justifyContent="center">
          <AccountCircleOutlinedIcon
            sx={{
              width: "120px",
              height: "120px",
              color: "#210366"
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Upload Your Photo and Get a chance to feature on Collegecue leaderboard
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            maxWidth: "250px",
            height: "45px",
            maxHeight:"60px",
            borderRadius: "12px",
            bgcolor: "#ff9e00",
            color: "white",
            marginTop: "1rem",
            marginLeft:"4rem",
          }}
        >
          Upload Profile Pic
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          bgcolor: "#D9E4EC",
          alignItems:"center",
          gap: "2.5rem",
          border: "dashed 3px black",
          padding: "4rem 5rem",
          textAlign: "center",
        }}
      >
        <Box display="flex" justifyContent="center">
          <AddPhotoAlternateOutlinedIcon
            sx={{
              width: "120px",
              height: "120px",
              color: "#210366"
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: "15px",
            fontWeight: "500",
            marginBottom: "1rem",
          }}
        >
          Drag and drop files to upload or
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            maxWidth: "250px",
            height: "45px",
            borderRadius: "12px",
            bgcolor: "#ff9e00",
            color: "white",
          }}
        >
          Upload photo
        </Button>
      </Box>
    </Box>
  );
}
