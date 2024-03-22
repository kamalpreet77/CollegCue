import { React, useState } from "react";
import { Typography, Box, Link, Button, IconButton } from "@mui/material";
import jobListings from "./JobListingData";
import { Bookmark } from "@mui/icons-material";

const JobListing = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5%",
            marginTop: "8%",
            marginBottom: "1%",
            "@media (max-width:800px)": {
              flexDirection: "column",
              textAlign: "center",
            },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "380", fontSize: "40px" }}
            >
              New Job Listings
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "5%",
          }}
        >
          {jobListings.map((job) => (
            <div
              key={job.id}
              style={{
                padding: "2.5%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                height: "15vh",
                border: "1px solid #ccc",
                
                borderRadius: "8px",
                backgroundColor:"white",
                "@media (max-width:500px)": {
                  flexDirection: "column",
                  height: "auto",
                },
              }}
            >
              <Box sx={{ width: "60px", height: "60px", marginRight: "15px" }}>
                <img
                  src={job.image}
                  alt="Job Image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "10vw",
                  textAlign: "left",
                  
                  
                  "@media (max-width:500px)": {
                    width: "25vw",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "500" }}>{job.title}</Typography>
              </Box>
              <Box
                sx={{
                  width: "10vw",
                  textAlign: "left",
                  marginLeft:"15px",
                  "@media (max-width:500px)": {
                    width: "20vw",
                  },
                }}
              >
                <Typography>{job.employmentType}</Typography>
                <Typography>{job.datePosted},</Typography>
                <Typography sx={{ fontWeight: "750" }}>
                   {job.postedBy}
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign:"left",
                  width:"25vw",
                  marginLeft:"15px",
                  "@media (min-width:800px)": {
                    width: "10vw",
                  },
                }}
              >
                <Typography>{job.location}</Typography>
                <Typography sx={{ fontWeight: "750" }}>{job.subRoles}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "@media (min-width:800px)": {
                    width: "10vw",
                  },
                }}
              >
                <Link href="#">
                  <IconButton
                    sx={{
                      fontSize: "1.5rem",
                      color: "#56ABD2",
                      
                      "&:hover": {
                        color: "#17506A",
                      },
                    }}
                    onClick={() => {}}
                  >
                    <Bookmark />
                  </IconButton>
                </Link>
                <Button variant="contained" sx={{ bgcolor:"blue", color:"white", marginLeft:"25px"}}>Apply</Button>
              </Box>
            </div>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            "@media (min-width:800px)": {
              justifyContent: "left",
              marginLeft: "85px",
              marginTop: "-30px",
            },
          }}
        >
          <Typography variant="h5" sx={{fontSize:"15px"}}>
            <Link href="#">Explore All Fields</Link>
          </Typography>
        </Box>

        <Box sx={{ padding: "5%", textAlign: "center", paddingTop: "0" }}>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#DFEAF2",
              padding: "10px 15px",
              borderRadius: "15px",
              marginTop: "25px",
            }}
          >
            <Typography>
              Do you want to post a job for your company? We can help.{" "}
              <Link
                href="#"
                sx={{
                  color: "blue",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#4B1DC5",
                    textDecoration: "none",
                  },
                }}
              >
                Click here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobListing;
