import React, { useState } from 'react';
import { Typography, Box, Link, Button, IconButton, MenuItem, Select } from '@mui/material';
import { Bookmark } from '@mui/icons-material';
import jobListings from './RightCardData';

const RightCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('Option 1');

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '5%',
                marginTop: '8%',
                marginBottom: '1%',
                '@media (max-width:800px)': {
                    flexDirection: 'column',
                    textAlign: 'center',
                },
                '@media (min-width:800px)': {
                    maxWidth: '75%',
                    marginLeft: '10vw',
                }
            }}>
                <Box>
                    <Typography variant="p" sx={{ fontWeight: '700', fontSize: '25px' }}> All {jobListings.length} jobs found </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography variant="body1">Short:</Typography>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        sx={{
                            marginLeft: '8px',
                            borderRadius: '4px', // Adjust the border radius as needed
                            width: '170px', // Adjust the width as needed
                            '& .MuiSelect-outlined': {
                                paddingTop: '10px', // Adjust top padding to center content vertically
                                paddingBottom: '10px', // Adjust bottom padding to center content vertically
                            },
                        }}
                        variant="outlined"
                    >
                        <MenuItem value="Option 1">Price Short</MenuItem>
                        <MenuItem value="Option 2">Low to High</MenuItem>
                        <MenuItem value="Option 3">High to Low</MenuItem>
                    </Select>
                </Box>
            </Box>
            <Box sx={{ padding: '5%' }}>
                {currentJobs.map((job) => (
                    <Box key={job.id} sx={{
                        padding: '7%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '15vh',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        '@media (max-width:800px)': {
                            flexDirection: 'column',
                            height: 'auto',
                        }
                    }}>
                        <Box sx={{ width: '60px', height: '60px', marginRight: '10px' }}>
                            <img src={job.image} alt="Job Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </Box>
                        <Box sx={{
                            '@media (min-width:800px)': {
                                width: '20vw',
                            }
                        }}>{job.title}</Box>
                        <Box sx={{
                            '@media (min-width:800px)': {
                                width: '20vw',
                            }
                        }}>
                            <Typography>{job.employmentType}</Typography>
                            <Typography>{job.datePosted}, Posted By {job.postedBy}</Typography>
                        </Box>
                        <Box sx={{
                            '@media (min-width:800px)': {
                                width: '20vw',
                            }
                        }}>
                            <Typography>{job.location}</Typography>
                            <Typography>{job.subRoles}</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '@media (min-width:800px)': {
                                width: '15vw',
                            }
                        }}>
                            <Link href="#">
                                <IconButton sx={{
                                    fontSize: '1.5rem',
                                    color: '#56ABD2',
                                    '&:hover': {
                                        color: '#17506A',
                                    },
                                }} onClick={() => {}}>
                                    <Bookmark />
                                </IconButton>
                            </Link>
                            <Button>Apply</Button>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ padding: '5%', textAlign: 'center', paddingTop: '0' }}>
                <Button onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
                <Button onClick={nextPage} disabled={indexOfLastJob >= jobListings.length}>Next</Button>
            </Box>
        </Box>
    );
};

export default RightCard;
