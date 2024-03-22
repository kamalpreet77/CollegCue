import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import Img1 from '../images/pana.png';
import Videos from './Videos';
import Photos from './Photos';
import TopCourses from './TopCourses';
import Notifications from './Notifications';
import News from './News';
import Placements from './Placements';
import Faculties from './Faculties';
import LearnCourses from './LearnCourses';

const ApplySection = () => {
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        height="54px"
        textCenter
        sx={{backgroundColor: '#7B90FF', borderRadius: '12px', fontWeight: '700', fontStyle : 'bold', fontSize: '16px', marginTop: '1rem', textTransform: 'capitalize'}}
        disableElevation
      >Apply Now</Button>

      <Button
        fullWidth
        textCenter
        sx={{color: '#210366', borderRadius: '12px', fontWeight: '700', fontStyle : 'bold', fontSize: '16px', marginTop: '1rem', textTransform: 'capitalize', boxShadow: '0px 0px 40px 0px #7B90FF26'}}
      >Download Brochure
      <FileDownloadOutlinedIcon style={{position: 'absolute', right: '0px'}} />
      </Button>

      <Box
        sx={{
          marginTop: '20px',
          borderRadius: '28px',
          padding: '10px', 
          alignItems: 'center', 
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 0px 40px 0px #7B90FF26'
        }}
      >
      <img src={Img1} alt="School" style={{width: '80px', height: '50px'}} />
      <Typography
        sx={{
          fontStyle: 'bold',
          fontWeight: '500',
          fontSize: '16px',
          color: '#210366',
          
        }}
      >Interested In This College ?</Typography>
      <Button
        sx={{ backgroundColor: '#FF7900', color: '#ffffff', width: '300px', borderRadius: '12px', fontWeight: '600', fontStyle : 'bold', marginTop: '1rem', textTransform: 'capitalize', 
        '&:hover': {
          background: "#ffffff",
          color : '#FF7900',
       },
      }}
        ><HelpOutlineIcon style={{marginRight: '0.5rem'}} /> Ask a Question
      </Button>
      </Box>

      <Box sx={{
        marginTop: '20px', 
        borderRadius: '28px', 
        padding: '20px', 
        alignItems: 'center', 
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 40px 0px #7B90FF26'
      }}>
        <Typography
          sx={{
            
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '12px',
            color: '#210366',
          }}
        >Follow & Share, To Get Information About Admission</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Button variant='contained' sx={{backgroundColor: '#7B90FF', borderRadius: '10px 0px 0px 10px', fontSize: '14px',  textTransform: 'capitalize'}}><AddIcon />Follow</Button>
          <Button variant='contained' sx={{backgroundColor: '#210366', borderRadius: '0px 10px 10px 0px', fontSize: '14px',  textTransform: 'capitalize'}}><SendIcon />Share</Button>
        </Box>
      </Box>
      <Videos />
      <Photos />
      <TopCourses />
      <Notifications />
      <News />
      <Placements />
      <Faculties />
      <LearnCourses />
    </>
  )
}

export default ApplySection;
