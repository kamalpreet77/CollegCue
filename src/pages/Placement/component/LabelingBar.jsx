import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";

const data = [
  { name: "Oracale", density: 18 },
  { name: "Accenture", density: 12 },
  { name: "Amazon", density: 12 },
  { name: "IBM", density: 11 },
  { name: "Infosys", density: 10 },
  { name: "Cognizant", density: 9 },
  { name: "Microsoft", density: 7 },
  { name: "Unilever", density: 7 },
  { name: "Boston Consultion Group", density: 5 },
  { name: "Flipkart", density: 4 },
  { name: "MicKensy &co", density: 4 },
  { name: "Goldman Sachs", density: 4 },
  { name: "Brain & Company India pvt ltd", density: 3 },
];

const LabelingBar = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginTop: "10px",
      width: "100%",
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

export default LabelingBar;
