import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    gap: "10px",
                    width: "100%",
                    height: "50px",
                    overflowY: "scroll",
                    bgcolor: "white",
                    marginY: "1rem"
                }}
            >
                <Link to="/institute-info/">Info</Link>
                <Link to="/institute-info/course-fee">Courses & Fees</Link>
                <Link to="/institute-info/faculty">Faculty</Link>
                <Link to="/institute-info/hostel">Hostel</Link>
                <Link to="/institute-info/gallery">Gallery</Link>
                <Link to="/institute-info/cutoff">Cut Off</Link>
                <Link to="/institute-info/review">Reviews</Link>
                <Link to="/institute-info/placement">Placement</Link>
                <Link to="/institute-info/trending-news">News</Link>
            </Stack>
        </>
    )
}

export default TopNavbar