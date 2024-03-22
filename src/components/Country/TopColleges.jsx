import React from 'react';
import CollegesCards from '../Cards/CollegesCards';
import ViewMoreButton from "../Buttons/ViewMoreButton";
import { Box, Typography, Stack } from '@mui/material';

const TopColleges = ({topCollegesCard}) => {
  return (
    <>
      <Box sx={{marginTop: '2rem'}}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
            marginBottom: "10px",
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '30px',
            color: '#41355D',
            marginLeft: '1rem',
            textTransform: 'capitalize'
          }}>Top college collection of Canada</Typography>
          <ViewMoreButton />
        </Box>
        <Stack direction='row' flexWrap='wrap' justifyContent="center" alignItems="center" marginTop="2rem">
          {topCollegesCard.map((val,index)=>{
            return(
              <CollegesCards
                key={index}
                img={val.img}
                icon={val.icon}
                bgColor={val.bgColor}
                titles={val.titles}
                contents={val.contents}
                contents_body={val.contents_body}
                content_link={val.content_link}
               />
            );
            })}
        </Stack>
      </Box>
    </>
  )
}

export default TopColleges;
