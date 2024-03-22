import React from 'react'
import { Box, Container, Stack, Button, Card, CardContent, Typography, List, ListItem, Divider, } from '@mui/material'

export default function AmountCard({ heading, desc1, desc2, desc3, desc4, desc5, amount1, amount2, amount3, amount4, amount5 }) {
    return (
        <>
            <Box>

                <Box sx={{ paddingBottom: '30px' }}>
                    <Card variant="outlined" sx={{
                        width: '410px',
                        borderBottom: '1px solid #7B90FF33',
                        borderRadius: '26px',
                        boxShadow: '0px 4px 40px 0px #7B90FF26',

                    }}>
                        <CardContent >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '0em',
                                marginLeft: '1rem',
                                marginBottom: '1rem',
                                color: '#41355D'
                            }}> {heading}</Typography>

                            <Divider />
                            <List sx={{
                                borderBottom: '2px solid #7B90FF33'
                            }}>
                                <ListItem sx={{
                                    display: 'list-item',
                                }}>
                                    <Typography sx={{
                                        color: '#2F1370', fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        letterSpacing: '0em',
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                    }}> {desc1}
                                    </Typography>
                                    <span style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem'
                                    }}>{amount1}</span>
                                </ListItem>
                            </List>


                            <List sx={{
                                borderBottom: '1px solid #7B90FF33'
                            }}>
                                <ListItem sx={{
                                    display: 'list-item',
                                }}>
                                    <Typography sx={{
                                        color: '#2F1370', fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        letterSpacing: '0em',
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                    }}>  {desc2}  </Typography>
                                    <span style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem'
                                    }}>{amount2}</span>
                                </ListItem>
                            </List>



                            <List sx={{
                                borderBottom: '1px solid #7B90FF33'
                            }}>
                                <ListItem sx={{
                                    display: 'list-item',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderColor: '#FFFFFF',
                                }}>
                                    <Typography sx={{
                                        color: '#2F1370', fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        letterSpacing: '0em',
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                    }}> {desc3}  </Typography>
                                    <span style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem'
                                    }}>{amount3}</span>
                                </ListItem>
                            </List>
                            <List sx={{
                                borderBottom: '1px solid #7B90FF33'
                            }}>
                                <ListItem sx={{
                                    display: 'list-item',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderColor: '#FFFFFF',
                                }}>
                                    <Typography sx={{
                                        color: '#2F1370', fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        letterSpacing: '0em',
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                    }}> {desc4} </Typography>
                                    <span style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem'
                                    }}>{amount4}</span>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem sx={{
                                    display: 'list-item',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderColor: '#FFFFFF',
                                }}>
                                    <Typography sx={{
                                        color: '#2F1370', fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        letterSpacing: '0em',
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                    }}> {desc5} </Typography>
                                    <span style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem'
                                    }}>{amount5}</span>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
