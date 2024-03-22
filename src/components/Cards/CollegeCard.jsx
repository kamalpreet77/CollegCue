import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import GrayButton from "../Buttons/GrayButton";
import OrangeButton from "../Buttons/OrangeButton";
import BlueButton from "../Buttons/BlueButton";
import { Link } from "react-router-dom";

const CollegeCard = (props) => {
  return (
    <Box
      sx={{
        border: "1px solid #553cdf",
        boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        '@media (min-width:800px)': {
          flexDirection: "row",
          height: "180px",
          width: "auto",
        },
        '@media (max-width:800px)': {
          padding: '2%',
        }
      }}
    >
      <Typography sx={{
        display: 'flex',
        alignItems: "center",
        '@media (max-width:800px)': {
          justifyContent: 'center',
        }
      }}>
        <Avatar
          src={props.img}
          sx={{
            height: "100px",
            width: "100px",
            border: "0.1px solid #7B90FF",
            objectFit: "fill",
          }}
        />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "0.7rem",
          '@media (min-width:800px)': {
            width: "47%",
            marginLeft: '2vw',
          },
        }}
      >
        <Link to={`/institute-info/${props.name}`}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#210366",
              whiteSpace: "nowrap",
              '@media (max-width:800px)': {
                whiteSpace: 'wrap',
                textAlign: 'center',
              }
            }}
          >
            {props.name}
          </Typography>
        </Link>
        <Typography
          sx={{

            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            whiteSpace: "nowrap",
            '@media (max-width:800px)': {
              whiteSpace: 'wrap',
              textAlign: 'center',
            }
          }}
        >
          {props.location}
        </Typography>
        <Box sx={{
          display: "flex", flexDirection: "row", gap: "0.2rem",
          '@media (max-width:800px)': {
            flexDirection: 'column',
          },
        }}>
          <Box sx={{
            display: 'flex', flexDirection: 'row', gap: '0.2rem',
            '@media (max-width:800px)': {
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1vh',
              flexDirection: 'row',
              width: '100%',
              paddingBottom: '1vh',
            },
          }}>
            <GrayButton text="View Details" />
            <GrayButton text="Placements" />
          </Box>

          <Box sx={{
            display: 'flex', flexDirection: 'row', gap: '0.2rem',
            '@media (max-width:800px)': {
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1vh',
              flexDirection: 'row',
              width: '100%',
              paddingBottom: '1vh',
            },
          }}>
            <BlueButton text="Add To Compare" link={props.reviews} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.2rem",
            whiteSpace: "nowrap",
            '@media (max-width:800px)': {
              justifyContent: 'center',
              alignItems: 'center',
            },
            '@media (min-width:800px)': {
              flexDirection: "row",
            },
          }}
        >
          <GrayButton text={`Course & Fees: ${props.fees}`} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "0.8rem",
              color: "#210366",
              marginLeft: "0.3rem",
              paddingTop: "0.2rem",
            }}
          >
            {props.otherfee}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "0.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "3rem",
          '@media (max-width:800px)': {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: "0rem",
          },
        }}
      >
        <Typography
          sx={{

            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft: "0.3rem",
            paddingTop: "0.2rem",
          }}
        >
          {props.stars}
        </Typography>
        <Rating
          name="read-only"
          value={props.stars}
          sx={{ color: "#7B90FF" }}
          precision={0.1}
          readOnly
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "0.5rem",
            paddingBottom: '4vh',
            '@media (max-width:800px)': {
              paddingTop: '2vh',
              margin: '0',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <OrangeButton text="Brochure" link={props.brochure} />
          <OrangeButton text="Enquire" link={props.enquire} />
        </Box>
      </Box>
    </Box>
  );
};

export default CollegeCard;
