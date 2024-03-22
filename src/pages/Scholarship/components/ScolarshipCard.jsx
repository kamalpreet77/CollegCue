import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  ButtonGroup,
  Link as MuiLink, // Rename MUI's Link to avoid conflict with React Router's Link
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SendIcon from "@mui/icons-material/Send";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const ScholarshipCard = ({
  scholarshipName,
  internationalStudentEligible,
  amount,
  type,
  levelOfStudy,
  numberOfScholarships,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApplyNow = () => {
    navigate("/tata-scholarships"); // Navigate to '/tata-scholarships' when clicked
  };

  return (
    <Card
      sx={{
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1.8rem",
        width: "22.625rem",
        padding: "0.8rem",
        color: "#2f1370",
        "&:hover": {
          transform: "scale(1.01)",
          transition: "0.3s",
          boxShadow: "0 2px 8px 2px rgba(178, 178, 178, 0.48)",
        },
      }}
    >
      {/* Card body */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        {/* Card heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "1.3rem",
            lineHeight: "1.5rem",
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {scholarshipName}
        </Typography>
        <Divider sx={{ backgroundColor: "#21262D" }} />
        {/* Scholarship details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* List of details */}
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              marginLeft: "1rem",
              fontSize: "1rem",
            }}
          >
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }}
              />
              International Student eligible:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {internationalStudentEligible}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }}
              />
              Amount:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {amount}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }}
              />
              Type:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {type}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }}
              />
              Level of Study:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {levelOfStudy}
              </span>
            </ListItem>
            <ListItem disablePadding={true}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }}
              />
              Number of Scholarships:{" "}
              <span style={{ fontWeight: "800", marginLeft: "0.5rem" }}>
                {numberOfScholarships}
              </span>{" "}
            </ListItem>
          </List>

          {/* Link to explore the scholarship details */}
          <MuiLink
            component={Link}
            to="#"
            sx={{
              color: "#FF7900",
              fontWeight: 600,
              fontSize: "0.8rem",
              lineHeight: "0.9rem",
              textDecorationLine: "underline",
              textDecorationColor: "#FF7900",
              "&:hover": {
                color: "#2f1370",
                textDecorationColor: "#2f1370",
              },
            }}
          >
            View more
          </MuiLink>
        </Box>

        {/* Explore buttons */}
        <ButtonGroup
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "800",
          }}
        >
          <Button
            startIcon={<SendIcon />}
            onClick={handleApplyNow} // Call handleApplyNow on click
            sx={{
              background: "linear-gradient(to right, #FFA07A, #FF6347)",
              borderRadius: "1rem !important",
              padding: "0.5rem 1.5rem",
              color: "#ffffff",
              transition: "color 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to right, #FF6347, #FF4500)",
                color: "#2F1370",
                transition: "0.3s ease",
              },
            }}
          >
            Apply Now
          </Button>
          <Button
            startIcon={<NotificationsActiveIcon />}
            sx={{
              backgroundColor: "#7B90FF",
              borderRadius: "1rem !important",
              padding: "0.5rem 1.5rem",
              color: "#fff",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2f1370",
                backgroundColor: "#ffffff",
                transition: "color 0.3s ease",
              },
            }}
          >
            Get Alert
          </Button>
        </ButtonGroup>
      </CardContent>
      {/* Card body end */}
    </Card>
  );
};

export default ScholarshipCard;
