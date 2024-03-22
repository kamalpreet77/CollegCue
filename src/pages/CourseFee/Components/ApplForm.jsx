import { Box, Button, Container, Grid, Typography } from "@mui/material"
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import image1 from "../Icons/Image1.png";
import image2 from "../Icons/Image2.png";
import image3 from "../Icons/Image3.png";
function ApplicationForm() {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "0px ",
            paddingTop: "2rem !important",
        }}>
            <Box
                sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",

                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",

                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{
                        paddingLeft: '1rem',
                        color: '#74B72E',

                    }}>
                        <DescriptionOutlinedIcon sx={{
                            width: '4.3125rem',
                            height: '4rem',
                        }} />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: '35rem',
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography variant='h5' sx={{
                                color: "#210366",
                                fontWeight: "bold",
                                fontSize: "1.25rem",
                                paddingTop: '4rem',
                                fontFamily: "Poppins, sans-serif",
                            }} > Latest Application Forms 2023</Typography>
                             <Box sx={{paddingLeft: '25rem',paddingBottom: '4rem' }}>
                            <Button sx={{
                                color: '#FFF',
                                // textAlign: 'center',
                                fontSize: '1.25rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '1.25rem',
                                borderRadius: '0.75rem',
                                backgroundColor: '#FF7900',
                                marginRight: '10rem',
                                position: 'absolute',

                            }} variant="contained">Sponsored</Button>
                        </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', }} >
                        <Box >
                            <img src={image1} alt="Trulli" width="50" height="50"></img>
                        </Box>

                        <Grid item xs={6} md={6}>
                            <Typography variant='h5' sx={{
                                color: '#7B90FF',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 50,
                                lineHeight: '1.25rem',
                                paddingLeft: "1rem"
                            }} >Lovely Professional University</Typography>
                        </Grid>



                    </Box>
                    <Box sx={{ paddingLeft: "2rem" }}>
                        <img src={image2} alt="Trulli" width="50" height="50"></img>
                    </Box>


                    <Grid item xs={6} md={6}>
                        <Typography variant='h5' sx={{
                            color: '#7B90FF',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '0.875rem',
                            fontStyle: 'normal',
                            fontWeight: 50,
                            lineHeight: '1.25rem',
                            paddingLeft: "1rem"
                        }} >Welingkar Institute of Management Development</Typography>


                    </Grid>

                    <Box sx={{ paddingLeft: "2rem" }}>
                        <img src={image3} alt="Trulli" width="40" height="40"></img>
                    </Box>

                    <Grid >

                        <Grid item xs={6} md={4}>
                            <Typography variant='h5' sx={{
                                color: '#7B90FF',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 50,
                                lineHeight: '1.25rem',
                                paddingLeft: "1rem"
                            }} >Collegedunia Review Rewards</Typography>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ display: 'flex' }}>

                    <Grid container rowSpacing={2} sx={{ display: 'flex', gap: 5 }}>

                        <Grid item xs={3}>
                            <Typography variant='h5' sx={{
                                color: '#210366',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 50,
                                lineHeight: '1.25rem',

                            }} >India's Top Ranked University with Best Placements | 3 Cr Highest Package</Typography>
                        </Grid>



                        <Grid item xs={4}>
                            <Typography variant='h5' sx={{
                                color: '#210366',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 50,
                                lineHeight: '1.25rem',

                            }} >1st Ranked Private B-School in Mumbai</Typography>

                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant='h5' sx={{
                                color: '#210366',
                                fontFamily: "Poppins, sans-serif",
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 50,
                                lineHeight: '1.25rem',

                            }} >Write a Review & Earn Up To</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container rowSpacing={2} sx={{ display: 'flex', gap: 5 }}>

                    <Grid item xs={3}>
                        <Typography variant='h5' sx={{
                            color: '#FF7900',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 50,
                            lineHeight: '1.25rem',

                        }} >Admissions Open for 2023</Typography>
                    </Grid>



                    <Grid item xs={4}>
                        <Typography variant='h5' sx={{
                            color: '#FF7900',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 50,
                            lineHeight: '1.25rem',

                        }} >Admissions Open for AY 2023-25</Typography>

                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant='h5' sx={{
                            color: '#FF7900',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 50,
                            lineHeight: '1.25rem',

                        }} > ₹500</Typography>
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} sx={{ display: 'flex', gap: 5 }}>

                    <Grid item xs={3}>
                        <Button sx={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontFamily: "Poppins, sans-serif",
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '1.25rem',
                            borderRadius: '0.75rem',
                            backgroundColor: '#FF7900',
                            gap: '0.625rem'

                        }} variant="contained">Apply Now</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default ApplicationForm;