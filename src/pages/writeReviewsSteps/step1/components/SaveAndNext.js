import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";
function SaveAndNext(){
    return (<Box width="100%" display="flex" flexDirection="row" gap="1.5rem" marginTop="3rem" marginBottom="2rem" >
    <Button  variant="contained" href="/steptwo"sx={{width:"250px",height:"45px", borderRadius:"12px",bgcolor:"#005f69", color:"white",
   "&:hover": {
   bgcolor:"#B0C4DE",
   color:"#4C516D",
  },}}>Save And Next</Button>
    
    </Box>

    )
}
export default SaveAndNext