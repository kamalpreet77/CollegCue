import { Avatar, Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GrayButton from "../../components/Buttons/GrayButtonInstitute";
import OrangeButton from "../../components/Buttons/OrangeButton";
import BlueButton from "../../components/Buttons/BlueButton";

const IndianInstituteCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const card = document.getElementById(`card-${props.name.replace(/\s/g, "")}`);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [props.name]);

  return (
    <Box
      id={`card-${props.name.replace(/\s/g, "")}`}
      sx={{
        
        width: "100%",
        backgroundColor: "white",
        boxShadow: isHovered ? "0px 5px 20px rgba(123, 144, 255, 0.2)" : "0px 2px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "18px",
        display: "flex",
        padding: "1rem",
        height: "400px",
        
        marginRight: "3rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        overflow: "hidden",
        border: "1px solid #ddd",
        position: "relative",
        marginBottom: "1.25rem",
        flex: "0 0 45.0%",
        maxWidth: "45.0%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)", // Zoom out slightly on hover
        },
        "@media (max-width: 768px)": {
          flex: "0 0 calc(100% - 1rem)",
          maxWidth: "calc(100% - 1rem)",
          marginRight: "1rem",
          height:"1000px",
        },
      }}
    >
      <Box sx={{
        position:"absolute",
        top:0,
        left:0,
        padding:"1rem",
        width:"100%",
        height:"auto",
        
        maxHeight:"100%",
        transition:"300ms ease",
        bgcolor: "#F0F8FF",
        borderBottom:"1px solid lightgrey",
        display:"flex",
        justifyContent:"center",
        gap:"1.5rem",
        flexDirection:"row",
        alignItems:"center",
        "@media (max-width: 768px)": {
          flexDirection:"column",
        },

      }}>
      
       
        <Avatar
          src={props.img}
          sx={{
           
            height: "100px",
            width: "100px",
           
          }}
        />
        <Box sx={{
           display:"flex",
           justifyContent:"flex-start",
           gap:"0.4rem",
           flexDirection:"column",
           alignItems:"center",
           width:"100%",
        }}>
           <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            wordWrap: "wrap",
            "@media (max-width:800px)": {
              whiteSpace: "wrap",
              textAlign: "center",
              flexDirection:"column",
            },
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            wordWrap: "wrap",
            "@media (max-width:800px)": {
              whiteSpace: "wrap",
              height:"auto",
              flexDirection:"column",
            },
          }}
        >
          {props.AcedemyName}
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft:"1rem",
            "@media (max-width:800px)": {
              whiteSpace: "wrap",
              height:"auto",
              flexDirection:"column",
            },
          }}
        >
          Centers: {props.CenterName}
        </Typography>

        </Box>
        <Box
        sx={{
          marginTop: "0.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "1rem",
          "@media (max-width:800px)": {
            justifyContent: "center",
            alignItems: "center",
            height:"auto",
            flexDirection:"column",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft: "2rem",
            paddingTop: "0.2rem",

          }}
        >
          {props.stars}/5
        </Typography>

        <Rating
          name="read-only"
          value={props.stars}
          sx={{ color:isHovered?"#C04000" :" #EC5800" }}
          precision={0.1}
          readOnly
        />
      </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "2rem",
          flexDirection: "column",
          justifyContent:"center",
          alignContent:"center",
          gap: "2rem",
          marginTop: "4rem",
          "@media (min-width:900px)": {
            width: "47%",
          },
          "@media (max-width:800px)": {
            marginTop: "20rem",
            padding: "0",
            gap: "0.2rem",
            justifyContent: "center",
            alignItems: "center",
            height:"auto",
            flexDirection:"column",
          },
        }}
      >
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.4rem",
            width: "100%",
            height:"auto",
            marginTop:"1rem",
            paddingTop:"1.5rem",
            alignItems:"center",
            justifyContent:"center",
            // bgcolor:"red",
            "@media (max-width:800px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height:"auto",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              // bgcolor:"red",
              width:"100%",
              "@media (max-width:800px)": {
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "1vh",
                paddingTop: "1vh",
                height:"auto",
              flexDirection:"column",

              },
            }}
          >
            {props.BlueBoxes &&
              props.BlueBoxes.map((item) => {
                return <BlueButton text={item.name} link={item.link} isHovered={isHovered}/>;
              })}
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "1rem",
                color: "#B25A38",
                whiteSpace: "nowrap",
                marginLeft: "0.3rem",
                "@media (max-width:800px)": {
                  whiteSpace: "wrap",
                  textAlign: "center",
                  height:"auto",
              flexDirection:"column",

                },
              }}
            >
              {props.Courses}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            width:"100%",
            justifyContent:"center",
            alignContent:"center",
            whiteSpace: "nowrap",
            "@media (max-width:800px)": {
              flexDirection: "column",
              whiteSpace: "wrap",
              height:"auto",

            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent:"center",
              alignContent:"center",
              gap:"0.5rem",
              // bgcolor:"red",
              width:"100%",
              "@media (min-width:800px)": {
                width: "100%",
              },
              "@media (max-width:800px)": {
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "1vh",
                paddingTop: "1vh",
                height:"auto",
              flexDirection:"column",

              },
            }}
          >
            <GrayButton text="Info" isHovered={isHovered}/>
            <GrayButton text="Courses & Fees "isHovered={isHovered} />
          </Box>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "1rem",
              color: "#004792",
              marginLeft: "0.3rem",
              paddingTop: "0.2rem",
              "@media (max-width:800px)": {
                textAlign: "center",
                height:"auto",
              flexDirection:"column",

              },
            }}
          >
            {props.CoursesFee}
          </Typography>
        </Box>
      </Box>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginLeft: "2rem",
          marginTop: "1.5rem",
          "@media (max-width:800px)": {
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0",
            marginBottom: "2vh",
            height:"auto",
            flexDirection:"column",

          },
        }}
      >
        <OrangeButton text="Brochure" link={props.brochure} />
        <OrangeButton text="Apply Now" link={props.apply} />
      </Box>
    </Box>
  );
};

export default IndianInstituteCard;
