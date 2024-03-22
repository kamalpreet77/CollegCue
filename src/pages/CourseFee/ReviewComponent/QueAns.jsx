import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const QueAns = ({
    user,
    date,
    questions,
}) => {
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const handleClick = () => {
        setShow(!show);
    };
    return (

        <Box sx={{
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            background: "#ffffff",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "0.9rem",

            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
        }}>

            <Box
                sx={{
                    height: `${show ? "fit-content" : "5.8rem"}`,
                    overflow: "hidden",
                    transition: "height 0.3s ease-in-out",
                }}
            >


                {questions.map(({ question, answer }, index) => {
                    return (
                        <Box key={index}>
                            <span style={{
                                fontFamily: "Poppins, sans-serif", fontWeight: 'bold', fontSize: "1rem", display: 'flex',
                                justifyContent: 'space-between'
                            }}>Ques: {question}

                                <Button
                                    onClick={handleClick}
                                    sx={{
                                        display: `${show ? "none" : "block"}`,
                                        color: "#7B90FF",
                                        padding: "0",
                                        background: "none",
fontWeight:'Bold',
                                        Border: "none",
                                        "&:hover": {
                                            background: "none",
                                            border: "none",
                                        },
                                    }}
                                >
                                    VIEW ALL
                                </Button>
                                <Button
                                    onClick={handleClick}
                                    sx={{
                                        display: `${!show ? "none" : "block"}`,
                                        color: "#FF7900",
                                        padding: "0",
                                        background: "none",
                                        fontWeight:'Bold',
                                        Border: "none",
                                        "&:hover": {
                                            background: "none",
                                            border: "none",
                                        },
                                    }}
                                >
                                    VIEW Less
                                </Button>
                            </span>
                            <Box>
                                <Typography
                                    id="name"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#7F7D9C",
                                        fontSize: "0.8rem",
                                        textTransform: "capitalize",

                                    }}
                                >
                                    Top Anser by {user}  on {date}
                                </Typography>

                            </Box>
                            <Typography>Ans: {answer}</Typography>
                           

                        </Box>
                    );
                })}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >

                <Box sx={{ display: "flex", gap: "1rem" }}>

                    <Typography onClick={() => setLike(like + 1)}>
                        <ThumbUpIcon sx={{ color: "#7B90FF", fontSize: "1.3rem" }} /> {like}
                    </Typography>
                    <Typography onClick={() => setDislike(dislike + 1)}>
                        <ThumbDownIcon sx={{ color: "#FF7900", fontSize: "1.3rem" }} />{" "}
                        {dislike}
                    </Typography>
                    <Typography>
                        <ShareIcon sx={{ color: "#000", fontSize: "1.3rem" }} /> Share
                    </Typography>

                </Box>
            </Box>



        </Box>


    );
};

export default QueAns;