import React from 'react';
// import logo from "../../Assets/image/college2.png";
import { Typography,Stack } from '@mui/material';


const FootBottom = () => {
    return (
        <>

            <Stack>
                <Typography variant="body1" component="div" sx={{ color: "white", marginLeft: "2rem", marginY: "1rem" }}>
                    &copy; 2024 BHARATTECH Technoechosystem Pvt. Ltd. All Rights Reserved.
                </Typography>
            </Stack>
        </>
    );
};

export default FootBottom;