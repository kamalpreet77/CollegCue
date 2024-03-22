import React from 'react'
import { Outlet } from 'react-router-dom'
import Course from '../Course'
import { Container, Box } from '@mui/material'
import Left from '../../components/Left'


const MainPageLayout = () => {
    return (
        <>
            <Container>
                <Box sx={{mt:"1.5rem"}} >
                    <Course />
                    <Box sx={{
                        '@media (max-width:800px)': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }}>
                        <Left />
                    </Box>
                    <Outlet />
                </Box>
            </Container>
        </>
    )
}

export default MainPageLayout