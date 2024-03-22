import React from "react";
import { Box, Typography } from "@mui/material";
import ExamsJEEMain from "../../components/Cards/ExamJEEMainCard";
import { JEEMainData } from "./Data";
import { useTheme } from '@mui/material/styles';
const ExamJEEMainRender = () => {
  const theme = useTheme();
  return (
    <Box >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
    
      
      <Box
        sx={{
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "#210366",
          whiteSpace: "nowrap",
          
        }}
      >
        <Typography variant='h5' sx={{
          color: "#210366",
          fontSize: "2.25rem",
          paddingTop: '1rem',
          fontWeight: 700,
         
          '@media (max-width: 768px)': {
            fontSize: '1rem', // Adjust the font size for tablets
          },
        }}>Top JEE Main Previous Year Papers</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // marginLeft : '5vw',
          justifyContent : 'center',
          alignItems : 'center',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
          
          gap: "5vw",
          marginTop: "10vh",
          paddingX: "10px",
          width: "100%",
          
        }}
      >
        {JEEMainData.map((item, id) => {
          return (
            <ExamsJEEMain
              key={id}
              name={item.name}
              date={item.date}
              img={item.img}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ExamJEEMainRender;
