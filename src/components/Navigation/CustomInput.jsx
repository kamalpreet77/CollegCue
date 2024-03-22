import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Facebook, Instagram, Twitter, YouTube, LinkedIn } from '@mui/icons-material';


function CustomInput() {

    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        // send email to server, display confirmation message
        event.preventDefault();
        console.log("Email:", email);
        // Clear the email field after submission
        setEmail("");
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                '@media (max-width : 770px)': {
                    alignItems: 'center',
                    height: "300px"
                }

            }}>
            <Typography
                variant="h5"
                sx={{
                    color: "white"

                }}>
                Get in touch
            </Typography>
            <Typography
                sx={{
                    color: "white"
                }}>
                We don’t send spam so don’t worry
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: "white",
                    borderRadius: "16px",
                    justifyContent: "center",
                    width: "80%",
                    '@media (max-width : 770px)': {
                        marginX: "auto"
                    }
                }}>
                    <input
                        value={email}
                        onChange={handleChange}
                        required
                        style={{
                            width: "300px",
                            height: "60px",
                            border: "none",
                            borderRadius: "16px",
                            outline: "none",
                            paddingLeft: "7px"
                        }}
                        type="text"
                        placeholder="Enter your Email"
                    />
                    <IconButton type="submit"
                        sx={{
                            backgroundColor: "#7B90FF",
                            color: "white",
                            borderRadius: "13px",
                            marginX: '0.4rem',
                        }}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </form>

            <Box
                sx={{ display: "flex", flexDirection: "row", width: '90%', alignItems: "center", gap: "1.5rem" }}
            >
                <Facebook
                    sx={{ color: "white" }}
                />
                <Instagram
                    sx={{ color: "white" }}
                />
                <Twitter
                    sx={{ color: "white" }}
                />
                <YouTube
                    sx={{ color: "white" }}
                />
                <LinkedIn
                    sx={{ color: "white" }}
                />
            </Box>
        </Box>
    );
}

export default CustomInput;