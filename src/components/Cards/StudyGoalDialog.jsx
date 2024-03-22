import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { stateData, cityData } from "../../data/DataLocation";

const SecondPopup = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const filteredCities = cityData.filter((city) =>
    city.city.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredStates = stateData.filter((state) =>
    state.state.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Select Your Study Preference
          <IconButton edge="end" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <Input
            sx={{ width: "100%" }}
            placeholder="Search /Select Your Preferred City or state"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Box>

        <Typography variant="h6">Popular Cities</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {filteredCities.map((cityInfo) => (
            <Box
              key={cityInfo.city}
              sx={{
                width: ["50%", "33%", "33%"],
                cursor: "pointer",
                padding: "1rem 1.5rem",
                borderRadius: "4px",
                border: "1px solid rgb(19, 162, 228 , 0)",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
              onClick={() => handleCitySelect(cityInfo)}
            >
              <span>
                <img src={cityInfo.img} alt={cityInfo.city} />
              </span>
              <Typography>{cityInfo.city}</Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h6">Popular States</Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {filteredStates.map((stateInfo) => (
              <Box
                key={stateInfo.state}
                sx={{
                  width: ["50%", "33%", "33%"],
                  cursor: "pointer",
                  padding: "1rem 1.5rem",
                  borderRadius: "4px",
                  border: "1px solid rgb(19, 162, 228 , 0)",
                  ":hover": {
                    backgroundColor: "rgb(236, 249, 255)",
                    color: "rgb(19, 162, 228)",
                    border: "1px solid rgb(19, 162, 228)",
                  },
                }}
                onClick={() => handleCitySelect(stateInfo)}
              >
                <span>
                  <img src={stateInfo.img} alt={stateInfo.state} />
                </span>
                <Typography>{stateInfo.state}</Typography>
              </Box>
            ))}
          </Box>{" "}
        </Typography>
      </DialogTitle>
    </Dialog>
  );
};

const StudyGoalDialog = ({ isOpen, onClose, data }) => {
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handleCourseClick = () => {
    setShowSecondPopup(true);
  };

  return (
    <>
      <Dialog
        open={isOpen && !showSecondPopup}
        onClose={onClose}
        fullWidth
        maxWidth="xs"
        sx={{
          "& .MuiDialog-paper": {
            overflowY: "visible",
            borderRadius: "2rem",
            padding: "1rem 0 0",
            border: "10px solid #553cdf",
          },
          "& .MuiDialogTitle-root": {
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiTypography-h4": {
            marginBottom: "1rem",
            display: "flex",
          },
          "& .MuiTypography-h6": {
            marginBottom: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Select Your Study Preference
            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <span>
              <img
                src={data?.imagePath}
                alt={data?.label}
                style={{ marginRight: "8px" }}
                width={60} height={60}
              />
            </span>

            <Typography sx={{ padding: "7px 0" }} variant="h5">
              {data?.label}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            onClick={handleCourseClick}
            sx={{
              cursor: "pointer",
              padding: "1rem 0.5rem",
              borderRadius: "4px",
              border: "1px solid rgb(19, 162, 228 ,0)",
              ":hover": {
                backgroundColor: "rgb(236, 249, 255)",
                color: "rgb(19, 162, 228)",
                border: "1px solid rgb(19, 162, 228)",
              },
            }}
          >
            {data?.course1}
            <ArrowRightIcon />
          </Typography>
          {data?.course2 && (
            <Typography
              variant="h6"
              onClick={handleCourseClick}
              sx={{
                cursor: "pointer",
                padding: "1rem 0.5rem",
                borderRadius: "4px",
                border: "1px solid rgb(19, 162, 228 ,0)",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
            >
              {data?.course2}
              <ArrowRightIcon />
            </Typography>
          )}
          {data?.course3 && (
            <Typography
              variant="h6"
              onClick={handleCourseClick}
              sx={{
                cursor: "pointer",
                padding: "1rem 0.5rem",
                borderRadius: "4px",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
            >
              {data?.course3}
              <ArrowRightIcon />
            </Typography>
          )}
        </DialogTitle>
      </Dialog>

      {showSecondPopup && (
        <SecondPopup onClose={() => setShowSecondPopup(false)} />
      )}
    </>
  );
};

export default StudyGoalDialog;