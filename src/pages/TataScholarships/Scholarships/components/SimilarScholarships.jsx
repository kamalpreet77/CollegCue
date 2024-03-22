import React from 'react'
import { Box, Card, CardContent, Container, Typography, List, ListItem, CardActions, Button, Grid, Stack, Divider, } from '@mui/material'


export default function SimilarScholarships({heading,point1,point2,point3,point4,point5,ans1,ans2,ans3,ans4,ans5}) {
    return (
        <>

           

            {/*....................Card........................ */}

            <Box sx={{
                  width: '430px',
                 // top: '195px',
                //  borderRadius: '28px',
                 color: '#FFFFFF',
                //  boxShadow: '0px 0px 40px 0px #7B90FF26',
            }}>

                <Box sx={{
                    // paddingBottom: '50px',
                   
                    
                }}>

                    <Box >
                        <Card variant="outlined" sx={{
                            boxShadow: '0px 0px 40px 0px #7B90FF26',
                        //    width: '430px',
                            // top: '3565px',
                              
                            // left: '216px',
                            borderRadius: '28px',
                        }}>
                            <CardContent>
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '20px',
                                    fontWeight: '600',

                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color: '#41355D',
                                    
                                    // width: '430px',
                                    // height: '62px',
                                    top: '3565px',
                                    left: '216px',
                                    borderRadius: '24px 24px 0px 0px',
                                    border: '0px 0px 1px 0px',
                                    marginBottom:'1rem'
                    

                                }}> {heading}
                                </Typography>

                                <Divider/>


                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                        color: '#41355D',

                                    }}
                                >
                                    <ListItem sx={{
                                        display: 'list-item',
                                    }}>
                                        {point1} <Typography variant='p' fontWeight="700"> {ans1} </Typography>
                                    </ListItem>
                                </List>


                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                        color: '#41355D',

                                    }}
                                >
                                    <ListItem sx={{
                                        display: 'list-item',
                                    }}>
                                       {point2} <Typography variant='p' fontWeight="700"> {ans2} </Typography>
                                    </ListItem>
                                </List>


                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                        color: '#41355D',

                                    }}
                                >
                                    <ListItem sx={{
                                        display: 'list-item',
                                    }}>
                                       {point3} <Typography variant='p' fontWeight="700"> {ans3} </Typography>
                                    </ListItem>
                                </List>


                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                        color: '#41355D',

                                    }}
                                >
                                    <ListItem sx={{
                                        display: 'list-item',
                                    }}>
                                        {point4} <Typography variant='p' fontWeight="700"> {ans4} </Typography>
                                    </ListItem>
                                </List>

                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                        color: '#41355D',

                                    }}
                                >
                                    <ListItem sx={{
                                        display: 'list-item',
                                    }}>
                                        {point5}<Typography variant='p' fontWeight="700"> {ans5} </Typography>
                                    </ListItem>
                                </List>
                            </CardContent>

                            <CardActions>
                                <Button size='small' sx={{
                                    color: '#FF7900', fontFamily: 'Poppins',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    marginLeft: '10px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    lineHeight: '18px',
                                    textTransform: 'inherit',
                                    textDecoration: 'underline',
                                }}>View more</Button>
                            </CardActions>


                            <CardActions>
                                <Button variant='contained' sx={{
                                    backgroundColor: '#FF7900', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    lineHeight: '21px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color: '#FFFFFF',
                                    textTransform: 'inherit',
                                    borderRadius: '10px',
                                    width: '168px',
                                    height: '40px',
                                    marginRight: '40px',
                                    marginLeft: '10px'
                                }}>Apply now</Button>
                                <Button variant='contained' sx={{
                                    backgroundColor: '#7B90FF', textTransform: 'inherit', color: '#FFFFFF', width: '168px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    lineHeight: '21px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}>Get alert</Button>
                            </CardActions>


                        </Card>
                    </Box>


                </Box>

            </Box>

        </>
    )
}
