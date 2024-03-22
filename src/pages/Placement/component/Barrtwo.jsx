import React from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis } from "recharts";
import { Box } from "@mui/material";

const data = [
  { name: "Business Development", density: 25 },
  { name: "Operation", density: 12 },
  { name: "Engineering", density: 8 },
  { name: "Information Technology", density: 8 },
  { name: "Sales", density: 8 },
  { name: "Consulting", density: 7 },
  { name: "Finance", density: 7 },
  { name: "Marketing", density: 6 },
  { name: "Program & Project Management", density: 6 },
  { name: "Product Management", density: 5 },
  { name: "Research", density: 4 },
  { name: "Education", density: 4 },
  { name: "Human Resources", density: 3 },
];

const Barrtwo = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginTop: "12px",
      width: "100%",
      borderRadius: "24px"
    }}>
      <ResponsiveContainer width="95%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="density" fill="#FF7900" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Barrtwo;
