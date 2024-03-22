
import Stepp from '../Stepper.jsx'
import ListTypo from "./components/ListTypo"
import MainHead from '../MainHead'
import Inputs from "./components/Inputs"
import InputTwo from "./components/Inputs.js"
import SaveAndNext from "../SaveAndNext.jsx"
import AddMoreButton from "./components/AddMoreButton"
import {Box, Card, CardContent} from "@mui/material";
import React, { useState } from "react";
function StepOne(){
  const [inputCount, setInputCount] = useState(1);

  const handleAddInput = () => {
    setInputCount(inputCount + 1);
  };
  const [inputC, setInputC] = useState(1);

  const handleAddInputs = () => {
    setInputC(inputC + 1);
  };
    return (
      <Box
      sx={{
      
        display: "flex",
        placeItems: "center",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
        padding: "2.5rem",
        alignItems:"center",
        justifyContent:"center",
        bgcolor:"#E1EBEE" ,     

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
      
  
        <Stepp s="3"/>
        <MainHead text="Q. How was Your Overall Experience at Chandigarh University- [CU]?"/>
        <ListTypo/>
        <MainHead text="Things You Liked"/>
        {[...Array(inputCount)].map((_, index) => (
              <Inputs key={index} />
            ))}
        <AddMoreButton onAddMoreClick={handleAddInput}/>
        <MainHead text="Things You Disliked "/>
        {[...Array(inputC)].map((_, index) => (
              <InputTwo key={index} />
            ))}
        <AddMoreButton onAddMoreClick={handleAddInputs}/>
        <SaveAndNext href1="/stepthree" href2="/stepfive"/>
    </Box>
    </CardContent>
    </Card>
    </Box>
    )
}
export default StepOne;