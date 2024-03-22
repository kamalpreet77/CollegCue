import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import EducationLoan2 from "../../../Assets/images/educationLoan2.png"

const TopLoan = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 30,
          fontWeight: "700",
          wordWrap: "break-word",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        Top Up Loans
      </Typography>
      <Stack display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        <Card
          style={{
            width: 160,
            height: 180,
            background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: 28,
            display: "flex",
            marginTop: 8,
            marginRight: 20,
          }}
        >
          <img
            style={{ width: 160, height: 180, objectFit: "cover" }}
            src={EducationLoan2}
            alt=""
          />
        </Card>
        <Typography
          style={{
            width: "80%",
            height: "100%",
            color: "#210366",
            fontSize: 18,
            fontWeight: "500",
            wordWrap: "break-word",
            marginTop: 6,
          }}
        >
          Education loans, offered by banks, NBFCs, and cooperatives, provide financial aid for students pursuing higher education in India or abroad. With rising education costs, these loans help students overcome financial barriers and access quality education. Government subsidy schemes further support academic excellence across all sectors of society.
          <Box>
            {showMore && (
              <>
                Curabitur vel fermentum justo. Nunc auctor nec enim vel tristique. Vestibulum ultrices quam nec justo luctus, sed pulvinar lorem congue.
              </>
            )}

            <Button onClick={toggleShowMore} style={{
              color: "#FF7900",
              fontSize: 15,
              
              fontWeight: "600",
              textDecoration: "underline",
              wordWrap: "break-word",
            }}>
              {showMore ? 'Read Less' : 'Read More'}
            </Button>
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default TopLoan;
