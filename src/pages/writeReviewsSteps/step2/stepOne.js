
import Stepp from '../Stepper'
import InputOne from '../Input1'
import MainHead from '../MainHead'
// import ListTypo from "./components/ListTypo"
import ListElement from '../ListElement'
import SaveAndNext from "../SaveAndNext"

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
      bgcolor:"#E1EBEE" ,     

      padding: "2.5rem",
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
      
        
  
        <Stepp s="1"/>
        <MainHead text="Q. How was the admission process?If you took any entrance exam, How was application process?"/>
        <ListElement/>
        <InputOne/>
        {/* < */}
        <MainHead text="Q. How is course Caricular and faculty members?"/>
        {/* <ListTypo/> */}
        <InputOne/>
        <SaveAndNext href1="/step" href2="/stepthree"/>
    </Box>
    </CardContent>
    </Card>
    </Box>
    )
}
export default StepOne;