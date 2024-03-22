import React from 'react'
import LevelCard from '../../components/Cards/LevelCard'
import { Box } from '@mui/material'
import img1 from './images/banner/img1.jpg'
import img2 from './images/banner/img2.jpg'
import img3 from './images/banner/img3.jpg'
import img4 from './images/banner/img4.jpg'
import img5 from './images/banner/img5.jpg'
import img6 from './images/banner/img6.jpg'
import { useState } from 'react'
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const LevelAllCards = () => {


  const data = [
    {
      imagePath: img1,
      levelHeading: 'After 10th Courses',
      btn: [
        {
          courseName: 'ITI',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },
        {
          courseName: 'Dental',
          link: '#',
        },
        {
          courseName: 'Animation',
          link: '#',
        },
        {
          courseName: 'Vocational courses',
          link: '#',
        },
        {
          courseName: 'Hotel management',
          link: '#',
        },
      ],
      exploreAllCourseLink: 'https://www.google.com',
    },
    {
      imagePath: img2,
      levelHeading: 'After 10+2 Courses',
      btn: [
        {
          courseName: 'Engineering',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },
        {
          courseName: 'Commerce',
          link: '#',
        },
        {
          courseName: 'Management',
          link: '#',
        },
        {
          courseName: 'Medical ',
          link: '#',
        },
        {
          courseName: 'Design',
          link: '#',
        },
        {
          courseName: 'Education',
          link: '#',
        },
        {
          courseName: 'Paramedical',
          link: '#',
        },
        {
          courseName: 'Science',
          link: '#',
        },
      ],
      exploreAllCourseLink: 'https://www.google.com',
    },
    {
      imagePath: img3,
      levelHeading: 'Diploma Courses',
      btn: [
        {
          courseName: 'Management',
          link: '#',
        },
        {
          courseName: 'Design',
          link: '#',
        },
        {
          courseName: 'Medical',
          link: '#',
        },
        {
          courseName: 'Engineering',
          link: '#',
        },
        {
          courseName: 'Science',
          link: '#',
        },
        {
          courseName: 'Paramedical',
          link: '#',
        },
        {
          courseName: 'Law',
          link: '#',
        },
        {
          courseName: 'Hotel management',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },


      ],
      exploreAllCourseLink: 'https://www.google.com',
    },
    {
      imagePath: img4,
      levelHeading: 'Certification Courses',
      btn: [
        {
          courseName: 'Science',
          link: '#',
        },
        {
          courseName: 'Management',
          link: '#',
        },
        {
          courseName: 'Education',
          link: '#',
        },
        {
          courseName: 'Agriculture',
          link: '#',
        },
        {
          courseName: 'Design',
          link: '#',
        },
        {
          courseName: 'Engineering',
          link: '#',
        },
        {
          courseName: 'Computer application',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },
        {
          courseName: 'Law',
          link: '#',
        },

      ],
      exploreAllCourseLink: 'https://www.google.com',
    },
    {
      imagePath: img5,
      levelHeading: 'Masters Courses',
      btn: [
        {
          courseName: 'Management',
          link: '#',
        },
        {
          courseName: 'Engineering',
          link: '#',
        },
        {
          courseName: 'Law',
          link: '#',
        },
        {
          courseName: 'Commerce',
          link: '#',
        },
        {
          courseName: 'Dental',
          link: '#',
        },
        {
          courseName: 'Medical',
          link: '#',
        },
        {
          courseName: 'Science',
          link: '#',
        },
        {
          courseName: 'Veterinary science',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },

      ],
      exploreAllCourseLink: 'https://www.google.com',
    },
    {
      imagePath: img6,
      levelHeading: 'Ph.d Research Courses',
      btn: [
        {
          courseName: 'Pharmacy',
          link: '#',
        },
        {
          courseName: 'Arts',
          link: '#',
        },
        {
          courseName: 'Management',
          link: '#',
        },
        {
          courseName: 'Engineering',
          link: '#',
        },
        {
          courseName: 'Agriculture',
          link: '#',
        },
        {
          courseName: 'Law',
          link: '#',
        },
        {
          courseName: 'Science',
          link: '#',
        },
        {
          courseName: 'Commerce',
          link: '#',
        },
        {
          courseName: 'Medical',
          link: '#',
        },
      ],
      exploreAllCourseLink: 'https://www.google.com',
    },


  ]
  const [displayedCards, setDisplayedCards] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const handleViewMore = () => {
    setDisplayedCards(data.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setDisplayedCards(5);
    setShowAll(false);
  };


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          overflow: "hidden",
          
          padding: "15px 15px",
          flexDirection: "row",
          '@media (max-width: 800px)': {
            flexDirection: "column",
            padding: "0rem",
            margin: "0rem",
          },
        }}
      >
        {data.slice(0, displayedCards).map((item, index) => (
          <LevelCard {...item} key={index} />
        ))}
      </Box>
      {!showAll && displayedCards < data.length && (
        <ViewMoreButton onClick={handleViewMore} heading="Show more Streams" />
      )}
      {showAll && (
        <ViewMoreButton onClick={handleViewLess} heading="Show less Streams" />
      )}
    </Box>
  );
};


export default LevelAllCards
