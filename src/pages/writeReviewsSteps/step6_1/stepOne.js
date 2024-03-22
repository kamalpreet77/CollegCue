
// import SaveAndNext from '..step8/components/SaveAndNext';
import Cards from "./components/card"
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
      
        
        <Cards/>
       
        {/* <SaveAndNext/>  */}
    </Box>
    </CardContent>
    </Card>
    </Box>
    )
}
export default StepOne;