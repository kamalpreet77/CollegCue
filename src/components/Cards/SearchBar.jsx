import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export default function SearchBar(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container maxWidth="sm" style={{ padding: "10px", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          overflow: "hidden",
          transition: "box-shadow 0.3s, border-color 0.3s",
          borderColor: isFocused ? "#6b46c1" : "transparent",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginLeft: "10px",
            color: isFocused ? "#6b46c1" : "rgba(33, 3, 102, 0.59)",
          }}
        >
          <IconButton
            type="button"
            sx={{
              p: "10px",
            }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </motion.div>
        <InputBase
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            ml: 1,
            flex: 1,
            color: isFocused ? "#6b46c1" : "rgba(33, 3, 102, 0.83)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "21px",
            fontSize: "16px",
            "&::placeholder": {
              color: isFocused
                ? "rgba(107, 70, 193, 0.5)"
                : "rgba(33, 3, 102, 0.5)",
            },
          }}
          placeholder={props.placeholder}
          inputProps={{ "aria-label": props.placeholder }}
        />
      </motion.div>
    </Container>
  );
}
