import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { motion } from "framer-motion";

const SimpleDropDown = ({ type, options }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <FormControl
        sx={{
          backgroundColor: "rgb(10,102,194)", // Soft light blue background color
          borderRadius: "0.75rem",
          fontWeight: "700",
          border: "2px solid #FFFFFF",
          fontSize: "1rem",
          width: "14rem",
          textAlign: "center",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)", // Soft shadow
        }}
      >
        <Select
          value={selectedOption}
          onChange={handleChange}
          sx={{
            width: "auto",
            fontSize: "1rem",
            color: "#1E1E1E", // Dark text color
            borderRadius: "0.75rem",
            "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "0.4125rem 0.625rem !important",
              },
          }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            {type}
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{
                fontWeight: 200,
                fontSize: "1rem",
              }}
              classes={{
                selected: "Mui-selected",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </motion.div>
  );
};

export default SimpleDropDown;
