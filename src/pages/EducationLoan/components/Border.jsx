import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography, Card } from "@mui/material";
import BankdetailCard from "./BankdetailCard";

const Border = ({ bankDetails }) => {
  return (
    <>
      <Stack
        maxWidth="lg"
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            marginY: "2rem",
            color: "#160048",
          }}
        >
          Bank Details
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}>

          <BankdetailCard bankDetails={bankDetails} />
        </Box>

      </Stack>
    </>
  );
};

export default Border;
