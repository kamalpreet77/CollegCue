import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { exams, degrees, reservationCategories } from './Data'; // Importing exam, degree, and reservation category options

const Prediction = () => {
    const [formData, setFormData] = useState({ examRank: '', selectedExam: '', selectedDegree: '', selectedCategory: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                width: "100%"
            }}>
            <Box>
                <TextField
                    name="examRank"
                    label="Enter Exam Rank"
                    type="number"
                    onChange={handleChange}
                    value={formData.examRank}
                />
            </Box>
            <Box>
                <FormControl fullWidth>
                    <InputLabel>Select Exam</InputLabel>
                    <Select
                        name="selectedExam"
                        value={formData.selectedExam}
                        onChange={handleChange}
                    >
                        {exams.map((exam) => (
                            <MenuItem key={exam.id} value={exam.id}>
                                {exam.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl fullWidth>
                    <InputLabel>Select Degree</InputLabel>
                    <Select
                        name="selectedDegree"
                        value={formData.selectedDegree}
                        onChange={handleChange}
                    >
                        {degrees.map((degree) => (
                            <MenuItem key={degree.id} value={degree.id}>
                                {degree.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl fullWidth>
                    <InputLabel>Select Reservation Category</InputLabel>
                    <Select
                        name="selectedCategory"
                        value={formData.selectedCategory}
                        onChange={handleChange}
                    >
                        {reservationCategories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <Button type="submit" variant="contained" color="primary">
                    Predict College
                </Button>
            </Box>
        </form>
    );
}

export default Prediction;
