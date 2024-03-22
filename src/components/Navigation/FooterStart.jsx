import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../Assets/collegecue.png";

const FooterStart = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: 'space-evenly',
            }}
        >
            <img src={logo} alt="CollegeCue" />
            <Typography
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "white",
                    gap: "10px"
                }}>
                <EmailIcon />
                collegecuesupport@gmail.com
            </Typography>
        </Box>
    )
}

export default FooterStart