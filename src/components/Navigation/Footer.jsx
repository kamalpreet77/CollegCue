import React from 'react'
import CustomInput from './CustomInput'
import FooterLink from './FooterLink'
import { Box } from '@mui/material'
import Divider from '@mui/material/Divider';
import FootBottom from './FootBottom';
import FooterStart from "./FooterStart"
import HalfCircle from "../../Assets/shapes/half-circle.svg"
import Circle from "../../Assets/shapes/circle.svg"
import FooterImg from "../../Assets/Footer.png";

const Footer = () => {
  return (
    <Box
      backgroundColor={'#2A3290'}
      sx={{
        backgroundImage: `url(${FooterImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: "1",
        paddingTop: "2rem"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "1rem",
          justifyContent: "space-evenly",
          gap: "2rem",
          '@media (max-width :770px)': {
            flexDirection: "column",
          }
        }}>
        <FooterStart />
        <FooterLink />
        <CustomInput />
      </Box>
      <Divider orientation="horizontal" variant="middle" light="true" sx={{ marginY: "1rem", borderColor: "white" }} />
      <FootBottom />

      <Box sx={{
        '@media (max-width : 770px)': {
          display: "none"
        }
      }}>
        <img
          src={HalfCircle}
          alt="shape"
          height={300}
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "-15%",
            right: "0%",
            rotate: "270deg",
          }} />
        <img
          src={Circle}
          alt="shape"
          height={300}
          style={{
            position: "absolute",
            bottom: '-50%',
            zIndex: "-1",
          }} />
      </Box>
    </Box>
  )
}

export default Footer
