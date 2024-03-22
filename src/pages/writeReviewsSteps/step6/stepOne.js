
import Stepp from '../Stepper'
 import UploadPhotos from './components/UploadPhotos'
import MainHead from '../MainHead'
import Rejected from './components/Rejected';
import TickMark from "./components/TicMark"
import Footer from "./components/Footer"
import SaveAndNext from '../SaveAndNext';
import {Box, Card, CardContent} from "@mui/material";



function StepOne(){
    return (
      <Box
      sx={{
      
        display: "flex",
        placeItems: "center",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
        padding: "2.5rem",
        bgcolor:"#E1EBEE" ,  
        alignItems:"center",
        justifyContent:"center",
        position: "relative",
        "& *": {
          fontSize: "0.8rem",
        },
      }}
    >
    <Card
    sx={{
     
      fontStyle: "normal",
      background: "#ffffff",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
      border: "none",
      borderRadius:"20px",
      padding: "1rem",
      "& *": {
        fontSize: "0.75rem",
        color: "#210366",
      },
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
      
  
        <Stepp s="5"/>
        <MainHead text="Upload Photos" required="true"/>
        <UploadPhotos/>
        <Rejected/>
        <TickMark/>
       <Footer/>
        <SaveAndNext href1="/stepfive" href2="/stepsixone"/> 
    </Box>
    </CardContent>
    </Card>
    </Box>
    )
}
export default StepOne;