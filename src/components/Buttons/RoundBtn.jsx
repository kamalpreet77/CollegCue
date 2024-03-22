import { Box, Typography } from "@mui/material";

const RoundBtn = ({ image, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:"#7B90FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
        //   backgroundColor: "#7B90FF",
          margin: "1rem",
        }}
      >
        <img src={image} alt={name} style={{objectFit:"cover"}} />
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "13px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#210366",
          maxWidth: 100,
          height: 30,
          wordWrap: "break-word",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default RoundBtn;
