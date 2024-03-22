import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const faq = ({ FaqData }) => {
    return (
        <>
            <Container>
                <Box sx={{
                    width: "620px",
                    height: "fit-content",
                    borderRadius: "12px",
                    marginY: "2rem",
                }}>
                    <Typography sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "23px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        marginY: "0.5rem"
                    }}>FAQs

                    </Typography>
                    <Box>
                        {FaqData.map((item, index) => (
                            <Accordion key={index} sx={{ background: "#EEECFE", borderRadius: "12px", }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography>{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default faq