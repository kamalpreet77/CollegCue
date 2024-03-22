import { Container, Typography } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import AllSquareBtn from './AllSquareBtn'

const ChooseYourFuture = () => {
    return (
        <>
            <Container maxWidth="lg">
                <HeadText headText='Choose your future' />
                <Typography
                    sx={{
                        color: "#210366",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        margin: "1rem",
                    }}
                >
                    CollegeCue.com is an extensive search engine for the students, parents, and education industry players who are seeking information
                </Typography>

                <AllSquareBtn />
            </Container>
        </>
    )
}

export default ChooseYourFuture
