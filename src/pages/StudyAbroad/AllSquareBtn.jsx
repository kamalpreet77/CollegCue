import { Stack } from "@mui/material";
import React from "react";
import SquareBtn from "../../components/Buttons/SquareBtn";
import img1business from "./images/futureBtn/business.png";
import img2science from "./images/futureBtn/science.png";
import img3accounting from "./images/futureBtn/accounting.png";
import img4finance from "./images/futureBtn/finance.png";
import img5humanities from "./images/futureBtn/humanities.png";
import img6eco from "./images/futureBtn/eco.png";
import img7env from "./images/futureBtn/env.png";
import img8math from "./images/futureBtn/math.png";
import img9history from "./images/futureBtn/history.png";
import img10chemistary from "./images/futureBtn/chemistary.png";

const AllSquareBtn = () => {
  const data = [
    {
      image: img1business,
      name: "Business",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: img2science,
      name: "science",
      noOfCollege: "1369 Colleges",
      link: "#",
    },
    {
      image: img3accounting,
      name: "Accounting ",
      noOfCollege: "1369 Colleges",
      link: "#",
    },
    {
      image: img4finance,
      name: "finance",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: img5humanities,
      name: "humanities",
      noOfCollege: "1256 Colleges",
      link: "#",
    },
    {
      image: img6eco,
      name: "economics",
      noOfCollege: "1242 colleges",
      link: "#",
    },
    {
      image: img7env,
      name: "environmental ",
      noOfCollege: "1577 Colleges",
      link: "#",
    },

    {
      image: img8math,
      name: "history",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: img9history,
      name: "history",
      noOfCollege: "1256 Colleges",
      link: "#",
    },
    {
      image: img10chemistary,
      name: "chemistry",
      noOfCollege: "1242 colleges",
      link: "#",
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={8}
        useFlexGap
        flexWrap="wrap"
        sx={{ marginY: "20px" }}
      >
        {data.map((item, index) => (
          <>
            <SquareBtn
              key={index}
              image={item.image}
              name={item.name}
              link={item.link}
              // noOfCollege={item.noOfCollege}
              style={{ flex: "0 0 20%", maxWidth: "10%"  }}
             
            />
          </>
        ))}
      </Stack>
    </>
  );
};

export default AllSquareBtn;
