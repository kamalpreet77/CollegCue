import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Input,
  InputLabel,
  Switch,
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Next = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/otp");
  };

  return (
    <>
      <Card
        sx={{
          width: "auto",
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "none",
          border: "none",
          padding: "1rem",
          "& *": {
            fontSize: "0.75rem",
            color: "#210366",
          },
          '@media (max-width:800px)': {
            maxWidth : '100%',
            padding : '1rem',
          }
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "1rem",
            padding: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}
            >
              Register Now To Apply
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>
              Get details and latest updates
            </Typography>
          </Box>

          <form
            onSubmit={handleSubmit}
            style={{
              width: "90%",
              color: "#210366",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <InputLabel htmlFor="courseInterest" sx={{ color: "#210366" }}>
                Course interested in
              </InputLabel>

              <Select
                id="courseInterest"
                type="text"
                required
                disableUnderline
                sx={{
                  border: "2px solid #EFEFEF",
                  borderRadius: "12px",

                  padding: "6px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#210366",
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      padding: "0px 0.625rem !important", // 0px 10px in rem
                    },
                }}
              >
                <MenuItem>
                  <em>none</em>
                </MenuItem>
                <MenuItem value={10}>MBA</MenuItem>
                <MenuItem value={20}>BBA</MenuItem>
                <MenuItem value={30}>B.tech</MenuItem>
              </Select>
            </Box>

            <Box sx={{ display: "flex", gap: "0.5rem",
            '@media (max-width:800px)': {
              display : 'flex',
              flexDirection: 'column',
            }
           }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem",
               }}
              >
                <InputLabel
                  htmlFor="higherEducationDetails"
                  sx={{ color: "#210366" }}
                >
                  Higher Education details
                </InputLabel>
                <Select
                  id="higherEducationDetails"
                  type="text"
                  required
                  disableUnderline
                  sx={{
                    border: "2px solid #EFEFEF",
                    borderRadius: "12px",

                    padding: "6px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#210366",
                    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px 0.625rem !important", // 0px 10px in rem
                      },
                  }}
                >
                  <MenuItem>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={10}>Graduation</MenuItem>
                  <MenuItem value={20}>Post Gradutaion</MenuItem>
                  <MenuItem value={30}>P.hd</MenuItem>
                </Select>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <InputLabel htmlFor="percentage" sx={{ color: "#210366" }}>
                  Percentage
                </InputLabel>
                <Input
                  id="percentage"
                  type="text"
                  required
                  disableUnderline
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "12px",
                    padding: "1px 12px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",

                    color: "#210366",
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "0.5rem",
            '@media (max-width:800px)': {
              display : 'flex',
              flexDirection: 'column',
            }
           }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <InputLabel
                  htmlFor="preferredDestination"
                  sx={{ color: "#210366" }}
                >
                  Preferred Destination
                </InputLabel>
                <Select
                  id="preferredDestination"
                  type="text"
                  required
                  disableUnderline
                  sx={{
                    border: "2px solid #EFEFEF",
                    borderRadius: "12px",

                    padding: "6px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#210366",
                    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px 0.625rem !important", // 0px 10px in rem
                      },
                  }}
                >
                  <MenuItem>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={20}>China</MenuItem>
                  <MenuItem value={30}>U.S.A</MenuItem>
                </Select>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem",
               }}
              >
                <InputLabel htmlFor="startDate" sx={{ color: "#210366" }}>
                  When do you plan to start your studies?
                </InputLabel>
                <Select
                  id="startDate"
                  type="text"
                  required
                  disableUnderline
                  sx={{
                    border: "2px solid #EFEFEF",
                    borderRadius: "12px",

                    padding: "6px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#210366",
                    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0px 0.625rem !important", // 0px 10px in rem
                      },
                  }}
                >
                  <MenuItem>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={10}>2023</MenuItem>
                  <MenuItem value={20}>2022</MenuItem>
                  <MenuItem value={30}>2021</MenuItem>
                </Select>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center",
            '@media (max-width:800px)': {
              display : 'flex',
              flexDirection: 'column',
            }
          }}>
              <InputLabel htmlFor="entranceExam" sx={{ color: "#210366" }}>
                Have You Appeared or Scheduled For any Entrance Exams?
              </InputLabel>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  No
                </InputLabel>

                <Switch
                  id="entranceExam"
                  sx={{
                    border: "1px solid #FF7900",
                    borderRadius: "40px",

                    "& .css-jsexje-MuiSwitch-thumb": {
                      backgroundColor: "#7B90FF",
                    },
                  }}
                />
                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  Yes
                </InputLabel>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem",
            '@media (max-width:800px)': {
              display : 'flex',
              flexDirection: 'column',
            }
           }}>
              <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                Do you have a Passport?
              </InputLabel>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  No
                </InputLabel>

                <Switch
                  id="passport"
                  sx={{
                    border: "1px solid #FF7900",
                    borderRadius: "40px",

                    "& .css-jsexje-MuiSwitch-thumb": {
                      backgroundColor: "#7B90FF",
                    },
                  }}
                />
                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  Yes
                </InputLabel>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem",
            '@media (max-width:800px)': {
              display : 'flex',
              flexDirection: 'column',
            }
           }}>
              <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                Looking for Online/Distance Courses?
              </InputLabel>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  No
                </InputLabel>
                <sup>
                  <Switch
                    id="passport"
                    sx={{
                      border: "1px solid #FF7900",
                      borderRadius: "20px",

                      "& .css-jsexje-MuiSwitch-thumb": {
                        backgroundColor: "#7B90FF",
                      },
                    }}
                  />
                </sup>

                <InputLabel htmlFor="passport" sx={{ color: "#210366" }}>
                  Yes
                </InputLabel>
              </Box>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: "9.375rem",
                backgroundColor: "#FF7900",
                borderRadius: "0.625rem !important",
                padding: "0.5rem 1.5rem",
                color: "#fff",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#2f1370",
                  backgroundColor: "#fff",
                  transition: "color 0.3s ease",
                },
                '@media (max-width:800px)': {
                  display : 'flex',
                  marginLeft : '14.3vw',
                },
                '@media (max-width:500px)': {
                  display : 'flex',
                  marginLeft : '18vw',
                }
              }}
            >
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Next;
