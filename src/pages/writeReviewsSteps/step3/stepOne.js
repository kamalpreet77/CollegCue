
import Stepp from '../Stepper'
import InputOne from '../Input1'
import MainHead from '../MainHead'
// import ListTypo from "../step6/components/ListTypo"
import ListElement from '../ListElement'
// import HeadingTwo from "./components/Head2"
import SaveAndNext from '../SaveAndNext'

import {Box, Card, CardContent} from "@mui/material";

function StepOne(){
    return (
      <Box
      sx={{
        bgcolor:"#E1EBEE" ,     
        
        display: "flex",
        placeItems: "center",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
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
      
  
        <Stepp s="2"/>
        <MainHead text="Q. How is Fees Structure & Discuss the oppertunity of Scholarship, Finicial Assisitance or Campus jobs?"/>
        <ListElement/>
        <InputOne/>
        {/* <HeadingTwo/> */}
        {/* <ListTypo/> */}
        <MainHead text="Q. How is Life at Campus"/>
        <ListElement/>
        <InputOne/>
        <SaveAndNext href1="/steptwo" href2="/stepfour"/>

    </Box>
    </CardContent>
    </Card>
    </Box>
    )
}
export default StepOne;