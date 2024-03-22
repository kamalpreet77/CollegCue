import React from "react";
import { Box } from "@mui/material";
import img1 from "./Images/Rectangle 17890 (6).png";
import img2 from "./Images/Rectangle 17890 (7).png";
import img3 from "./Images/Rectangle 17890 (8).png";
import img4 from "./Images/Rectangle 17890 (9).png";
import img5 from "./Images/Rectangle 17890 (10).png";
import img6 from "./Images/Rectangle 17890 (11).png";
import img7 from "./Images/Rectangle 17890 (12).png";
import img8 from "./Images/Rectangle 17890 (13).png";
import img9 from "./Images/Rectangle 17890 (14).png";
import img10 from "./Images/Rectangle 17890 (15).png";
import img11 from "./Images/Rectangle 17890 (16).png";
import img12 from "./Images/Rectangle 17890 (17).png";
import IndianInstituteCard from "../../components/Cards/IndianInstituteCard";

const RightCard = () => {
  const Data = [
    {
      img: img1,
      name: "IMS CATA",
      Courses: "+ 5 Courses",
      stars: "4.1",
      CoursesFee: " ₹ 38,000 Total",
      CenterName: "Noida And Mumbai",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "CAT",
          link: "",
        },
        {
          name: "NMAT",
          link: "",
        },
        {
          name: "SNAP",
          link: "",
        },
      ],
    },
    {
      img: img2,
      name: "Vajiram  & ravi institue ",
      Courses: "Other Courses",
      stars: "4.1",
      CoursesFee: "₹ 160,000 Total",
      CenterName: "Chennai",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "PSC",
          link: "",
        },
        {
          name: "UPSC",
          link: "",
        },
      ],
    },
    {
      img: img3,
      name: "Unique IAS acedemy",
      Courses: "+ 3 Courses ",
      stars: "4.1",
      CoursesFee: "₹ 120,000 Total",
      CenterName: "Chennai & Bhopal",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "PSC",
          link: "",
        },
        {
          name: "UPSC",
          link: "",
        },
      ],
    },
    {
      img: img4,
      name: "Vijetha IAS Acedemy",
      Courses: "Other Courses",
      stars: "4.1",
      CoursesFee: "₹ 85,000 Total",
      CenterName: "Chennai",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "CAT",
          link: "",
        },
        {
          name: "NMAT",
          link: "",
        },
        {
          name: "SNAP",
          link: "",
        },
      ],
    },
    {
      img: img5,
      name: "Chinmaya IAS Acedemy",
      Courses: " +2 Courses",
      stars: "4.1",
      CoursesFee: "₹ 75,000 Total",
      CenterName: "Chennai",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "CAT",
          link: "",
        },
        {
          name: "NMAT",
          link: "",
        },
        {
          name: "SNAP",
          link: "",
        },
      ],
    },
    {
      img: img6,
      name: "Clear Exam Coaching",
      Courses: " + 3 Courses",
      stars: "4.1",
      CoursesFee: "₹ 145,000 Total",
      CenterName: "New Delhi",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "JEE",
          link: "",
        },
        {
          name: "CLAT",
          link: "",
        },
      ],
    },
    {
      img: img7,
      name: "Parisharma Neet Academy",
      Courses: "Other Courses",
      stars: "4.1",
      CoursesFee: "₹ 170,000 Total",
      CenterName: "Banglore",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "NEET",
          link: "",
        },
      ],
    },
    {
      img: img8,
      name: "Interface Eduaction",
      Courses: "Other Courses ",
      stars: "4.1",
      CoursesFee: "₹ 70,000 Total",
      CenterName: "Ghaziabad",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "CAT",
          link: "",
        },
        {
          name: "NMAT",
          link: "",
        },
        {
          name: "SNAP",
          link: "",
        },
      ],
    },
    {
      img: img9,
      name: "Engineers Hub",
      Courses: "+ 4 Courses ",
      stars: "4.1",
      CoursesFee: "₹ 40,000 Total",
      CenterName: "Vishakhapatnam",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "Mechanical",
          link: "",
        },
        {
          name: "Electrical",
          link: "",
        },
      ],
    },
    {
      img: img10,
      name: "Goodwill Gate2IIT",
      Courses: "+ 4 Courses ",
      stars: "4.1",
      CoursesFee: "₹ 20,000 Total",
      CenterName: "Varanasi",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "Mechanical",
          link: "",
        },
        {
          name: "Electrical",
          link: "",
        },
      ],
    },
    {
      img: img11,
      name: "VG Acedemy",
      Courses: "+ 3 Courses ",
      stars: "4.1",
      CoursesFee: "₹ 5,000 Total",
      CenterName: "Hydrabad",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "RRB",
          link: "",
        },
        {
          name: "SSC",
          link: "",
        },
      ],
    },
    {
      img: img12,
      name: "Gate Aerospace Acedemy",
      Courses: "+ 3 Courses",
      stars: "4.1",
      CoursesFee: "₹ 32,000 Total",
      CenterName: "New Delhi & Banglore",
      brochure: "",
      apply: "",
      BlueBoxes: [
        {
          name: "Mechanical",
          link: "",
        },
        {
          name: "Electrical",
          link: "",
        },
      ],
    },
  ];

  return (
    <Box  sx={{ display: "flex", justifyContent:"center",
    alignItems:"center",flexDirection: "row", maxWidth:"80%",
    flexWrap:"wrap",
    paddingLeft:"15px",
    paddingRight:"15px",
    width:"100%",
    boxSizing:"border-box",
    height:"auto",
    // bgcolor:"green",
      overflow: "hidden",
      
     
      '@media (max-width: 800px)': {
        flexDirection: "column",
        padding: "0rem",
        margin: "0rem",
      },
    
     }}>
      {Data.map((item, index) => {
        return (
          
            <IndianInstituteCard key={index} {...item} />
        
        );
      })}
    </Box>
  );
};

export default RightCard;
