import { Box, Container, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import CollegeCard from "../../components/Cards/CollegeCard";
import NewApplicationCard from "../../components/Cards/NewApplicationsCard";
import { CollegeData, NewApplicationsData } from "./Data";

const Colleges = () => {
  const [visibleData, setVisibleData] = useState(5); // Number of initially visible items
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && visibleData < CollegeData.length) {
          setIsFetching(true);
          setTimeout(() => {
            setVisibleData((prev) => Math.min(prev + 4, CollegeData.length)); // Increase visible data by 4 or up to the length of the data
            setIsFetching(false);
          }, 1000); // Simulating API fetch delay
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isFetching, visibleData]);

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", }} >
        {CollegeData.map((item) => (
          <React.Fragment key={item.id}>
            {/* Render CollegeCard for items with id less than or equal to 4 */}
            {item.id <= 4 && (
              <CollegeCard
                id={item.id}
                img={item.img}
                name={item.name}
                location={item.location}
                stars={item.stars}
                fees={item.fees}
                otherfee={item.otherfee}
              />
            )}
            {/* Render NewApplicationCard section after the first 4 CollegeCards */}
            {item.id === 5 && (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "700",
                    fontSize: "2rem",
                    textAlign: "left",
                    marginTop: "2rem",
                    color: "#41355D",
                  }}
                >
                  Latest Application Forms 2023
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "5vh",
                    width: "auto",
                    gap: "10px",
                    "@media (max-width:800px)": {
                      width: "100%",
                    },
                  }}
                >
                  {/* Render NewApplicationCard components */}
                  {NewApplicationsData.map((props) => (
                    <NewApplicationCard
                      key={props.name}
                      img={props.img}
                      name={props.name}
                      ctc={props.ctc}
                      recruits={props.recruits}
                      apply={props.apply}
                      about={props.about}
                    />
                  ))}
                </Box>
              </>
            )}
            {/* Render CollegeCard for items with id greater than 4 */}
            {item.id > 4 && (
              <>
                <CollegeCard
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  location={item.location}
                  stars={item.stars}
                  fees={item.fees}
                  otherfee={item.otherfee}
                />
                {/* Render Advertisement after every 4th CollegeCard */}
                {item.id % 4 === 0 && (
                  <Box sx={{ textAlign: "center", height: '70px', border: "1px solid black", marginY: "10px" }}>
                    ADVETISEMENT HERE
                  </Box>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </Box>
      <div ref={containerRef}></div>
      {!isFetching && visibleData >= CollegeData.length && (
        <Typography
          sx={{ textAlign: "center", color: "gray", marginY: "1rem" }}
        >Reached the end</Typography>
      )}
      {isFetching && <Typography>Loading...</Typography>}
    </Container>
  );
};

export default Colleges;
