import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Faq = ({ faqs }) => {
    const [activeCollapse, setActiveCollapse] = useState(null);

    const toggleCollapse = (panel) => {
        setActiveCollapse(activeCollapse === panel ? null : panel);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: 'center'
            }}>
            {faqs.map((faq, index) => (
                <Accordion key={index} expanded={activeCollapse === `panel${index}`}
                    sx={{
                        flexBasis: "calc(50% - 2rem)",
                        margin: "1rem",
                    }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                        onClick={() => toggleCollapse(`panel${index}`)}
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default Faq;
