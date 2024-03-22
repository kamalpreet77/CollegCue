import React, { useState } from "react";
import Hero from "./Hero";
import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import NewsComponent from "./NewsComponent";
import MoreNewsComponent from "./MoreNewsComponent";
import { News, MoreNews, Trending } from "./Data";
import RadioGroup from "@mui/material";
import RatingFooter from "../../components/Cards/RatingFooter";
import TrendingCard from "../../components/Cards/TrendingCard";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const CollegeNews = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const totalItems = MoreNews.length; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total pages

  // Calculate items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MoreNews.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page navigation
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <style>
          {`
          body {
            margin: 0;
            background-color: #f9f9f9; /* Light background color */
            color: #333;
          }

          .page-content {
            padding: 2rem 0;
          }

          .trending-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin: 0 auto;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }

          .grid-item {
            display: flex;
            justify-content: center;
          }

          .subscribe-box {
            background-color: rgb(89,80,100);
            padding: 20px;
            margin-top: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .subscribe-form {
            display: flex;
            flex-direction: row;
            gap: 10px;
            margin-top: 10px;
            align-items: center;
          }

          .subscribe-btn {
            align-self: flex-end;
            width: 200px; /* Adjusted width of the button */
          }

          .MuiTextField-root {
            width: 300px; /* Adjusted width of the TextField */
            background-color: rgb(241,242,253)
          }
        `}
      </style>
      <Hero />
      <Container Width="100%" className="page-content">
        {/* News Cards */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "left",
            color: "#210366",
            marginBottom: "1rem",
          }}
        >
          Trending News
        </Typography>
        <div className="grid-container">
          {News.map((val, index) => (
            <div key={index} className="grid-item">
              <NewsComponent img={val.newsImg} btn_text={val.btn_text} news={val.news} />
            </div>
          ))}
        </div>

        {/* More News Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "left",
              color: "#210366",
            }}
          >
            More News
          </Typography>
          {/* <ViewMoreButton /> */}
        </Box>
        <div className="grid-container">
          {currentItems.map((val, index) => (
            <div key={index} className="grid-item">
              <MoreNewsComponent
                img={val.moreNewsImg}
                date={val.date}
                heading={val.heading}
                content={val.content}
                read_link={val.read_link}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ textAlign: "center", marginTop: "20px", paddingBottom: "20px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </Button>{" "}
          {pageNumbers.map((pageNumber, index) => (
            <Button
              key={index}
              sx={{
                minWidth: "auto",
                margin: "0 2px",
              }}
              variant={pageNumber === currentPage ? "contained" : "outlined"}
              color="primary"
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>

        {/* Subscribe Box */}
        <Box className="subscribe-box">
          <Typography variant="h2" sx={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Subscribe to Our Newsletter
          </Typography>
          <form className="subscribe-form">
            <TextField label="Mobile Number" variant="outlined" fullWidth required />
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField label="Course" variant="outlined" fullWidth required />
            <Button
              variant="contained"
              color="primary"
              className="subscribe-btn"
            >
              Subscribe
            </Button>
          </form>
        </Box>
       <RatingFooter/>
      </Container>
    </>
  );
};

export default CollegeNews;
