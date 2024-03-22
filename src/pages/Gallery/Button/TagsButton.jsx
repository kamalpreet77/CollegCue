import { Button } from "@mui/material";

function TagsButton({title,num}){
  let setNum=false;
  if(num!==undefined){
    setNum=true;
  }
  function bFont(){
    if(setNum)return "700"
    else return "400"
  }
  function bColor(){
    if(setNum)return "#210366"
    else return "#7B90FF"
  }
    return(
        <Button variant='contained' sx={{
            borderRadius:'1.3rem',
            textTransform: "none",
            minWidth:"9.25rem",
            borderColor:'#7B90FF',
            borderWidth:'0.2rem',
            borderStyle:'solid',
            justifyContent:'center',
            textAlign:'center',
            margin:'1rem',
            fontFamily:'Poppins',
            fontSize:'1.125rem',
            fontWeight:bFont(),
            lineHeight:'1.375rem',
            letterSpacing:'0rem',
            color:bColor(),
            backgroundColor:'transparent',
            cursor:'pointer',
            '&:hover':{
              backgroundColor:'#7B90FF',
              color:'white'
            }
          }} >

{title} 
{setNum? "(":""}{num}{setNum? ")" : ""}
        </Button>
    );
}

export default TagsButton;