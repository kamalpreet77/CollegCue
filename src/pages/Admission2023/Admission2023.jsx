import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import Card from "./Card";
import Admission2023Data from "./DataFile";
import HeroSection from "./HeroSection";
import RatingFooter from "../../components/Cards/RatingFooter";

const Admission2023 = () => {
  const itemsPerPage = 12; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(Admission2023Data.length / itemsPerPage);

  // Data for the current page
  const currentData = Admission2023Data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle next page click
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle previous page click
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle click on specific page number
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers to display
  const displayPages = [];
  const maxPagesToShow = 3; // Maximum number of page numbers to display

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  // Add ellipsis and first page number if necessary
  if (startPage > 1) {
    displayPages.push(1);
    if (startPage > 2) {
      displayPages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    displayPages.push(i);
  }

  // Add ellipsis and last page number if necessary
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      displayPages.push("...");
    }
    displayPages.push(totalPages);
  }

  return (
    <>
      <HeroSection />
      <Container maxWidth="lg">
        {/* <PageTitle title="Admission 2024" /> */}
        <Grid container spacing={2}>
          {currentData.map((val, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Card
                imag={val.imag}
                course={val.course}
                datee={val.datee}
                data={val.data}
                about={val.about}
              />
            </Grid>
          ))}
        </Grid>
        <RatingFooter />
        {/* <div style={{ textAlign: "center", marginTop: "20px", paddingBottom: "20px" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </Button>{" "}
          {displayPages.map((pageNumber, index) => (
            <Button
              key={index}
              sx={{
                minWidth: "auto",
                margin: "0 2px",
              }}
              variant={pageNumber === currentPage ? "contained" : "outlined"}
              color="primary"
              onClick={() =>
                typeof pageNumber === "number" && goToPage(pageNumber)
              }
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
        </div> */}
      </Container>
    </>
  );
};

export default Admission2023;
