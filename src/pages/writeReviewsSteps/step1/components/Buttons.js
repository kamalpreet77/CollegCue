import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  TextField,
  InputAdornment,
  MenuItem,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const data = [
  { title: "Do You Avail Reservation Benefits", label: "select type", place: "" },
  { title: "Was There any GD/PI for the Admission", label: "what was class size", place: "" },
  {
    title: "Did You opt for hostels",
    label: "Hostel fees",
    place: "yr",
  },
  {
    title: "Does Your College Provide Placement?",
    label: "Average Package",
    place: "yr",
  },

];

export default function Buttons() {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop:"2rem" }}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography variant="h6" sx={{ wordWrap: "wrap", color: "#6A5ACD" }}>
                {item.title}
              </Typography>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label={<Typography variant="h6" sx={{ wordWrap: "wrap", color: "#005f69" }}>Yes/No</Typography>}
              />
              <TextField
                variant="outlined"
                type="text"
                label={<Typography variant="h6" sx={{ wordWrap: "wrap", color: "#C4510A" }}>{item.label}</Typography>}
                placeholder={item.place}
                required
                select
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "25px", marginRight: "15px" }}
                    ></InputAdornment>
                  ),
                }}
                sx={{
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#210366",
                  width: "100%",
                  height: "65px",
                  borderColor: "#7b90ff",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "12px",
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root": { height: "100%" },
                  "& .MuiInputBase-input": {
                    color: "#210366",
                    fontSize: 20,
                    fontWeight: "SemiBold",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <MenuItem value="Abc">abc</MenuItem>
                <MenuItem value="def">def</MenuItem>
                <MenuItem value="ghi">ghi</MenuItem>
              </TextField>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography variant="h6" sx={{ wordWrap: "wrap", color: "#6A5ACD" }}>
                Does Your College Provide Internship?
              </Typography>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label={<Typography variant="h6" sx={{ wordWrap: "wrap", color: "#005f69" }}>Yes/No</Typography>}
              />
              </Box>
    </Box>
  );
}
