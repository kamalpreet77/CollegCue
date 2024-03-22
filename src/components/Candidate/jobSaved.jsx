import React, { useState } from "react";
import "./CSS/jobsaved.css";
import {Box, Card, Menu, MenuItem, MenuList, Typography, FormControl, InputLabel, Select  } from "@mui/material";
import Header from "./header";

const JobSaved = () => {
  // dynmaicity => whole content

  // action dropdown

  const [sortby, setSortby] = useState("");
  const [sortAction, setSortAction] = useState([
    { value: 1, sortBy: "New" },
    { value: 2, sortBy: "Category" },
    { value: 3, sortBy: "Job type" },
  ]);

  const handleSortbychange = (e) => {
    setSortby(e.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
  };

  const jobData = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&w=64&q=75",
      position: "Chief Human Resource Officer",
      wage: "$3500 / Monthly",
      experience: "Fresher",
      place: "USA, Palo Alto",
      work: "Management, Product",
      actions: [
        {
          name: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          name: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          name: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          name: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_23.20c2dd37.png",
      position: "Learning and Development Manager",
      wage: "$2500 / Monthly",
      experience: "No-Experience",
      place: "USA, New York",
      work: "Finance, Accounting",
      actions: [
        {
          name: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          name: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          name: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          name: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_24.cfe1701c.png",
      position: "Business Account Manager",
      wage: "$1800 / Monthly",
      experience: "Expert",
      place: "USA, San Jose",
      work: "Designer, Graphic",
      actions: [
        {
          name: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          name: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          name: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          name: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_25.7b6a766b.png",
      position: "Technical Project Manager",
      wage: "$800 / Weekly",
      experience: "Internship",
      place: "UK, Cupertino",
      work: "Writer, Content",
      actions: [
        {
          name: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          name: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          name: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          name: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="__variable_e76efa __variable_95782f">
        <div className="main-page-wrapper">
          <div className="dashboard-body">
            <div className="position-relative">
              <Header />

              <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
                <h2 className="main-title m0">Saved Job</h2>

                <div className="short-filter d-flex align-items-center">
                  <Box
                    sx={{ minWidth: 120, marginTop: "25px" }}
                    className="dash-input-wrapper mb-25"
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sort By:
                      </InputLabel>
                      <Select
                        className="list"
                        role="menubar"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortby}
                        label="SortBy"
                        onChange={handleSortbychange}
                      >
                        {sortAction.map((sortBy) => (
                          <MenuItem
                            key={sortBy.value}
                            value={sortBy.value}
                            className="option"
                          >
                            {sortBy.sortBy}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>

              <div>
                {jobData.map((job, index) => (
                  <div
                    key={index}
                    className="job-list-one style-two position-relative mb-20"
                  >
                    <div className="row justify-content-between align-items-center">
                      <div className="col-xxl-3 col-lg-4">
                        <div className="job-title d-flex align-items-center">
                          <a href="#" className="logo">
                            <img
                              alt="img"
                              loading="lazy"
                              width="60"
                              height="60"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img m-auto"
                              style={{ color: "transparent" }}
                              src={job.image}
                            />
                          </a>
                          <a href="#" className="title fw-500 tran3s">
                            {job.position}
                          </a>
                        </div>
                      </div>
                      <div
                        style={{ marginTop: "10px" }}
                        className="col-lg-3 col-md-4 col-sm-6 ms-auto"
                      >
                        <a
                          className="job-duration fw-500"
                          href="../../job-details-v1/27.html"
                        >
                          {job.experience}
                        </a>
                        <div className="job-salary">
                          <span className="fw-500 text-dark">{job.wage}</span>
                        </div>
                      </div>
                      <div
                        style={{ marginTop: "10px" }}
                        className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10"
                      >
                        <div className="job-location">
                          <a href="#">{job.place}</a>
                        </div>
                        <div className="job-category">
                          {job.work.split(", ").map((category, index) => (
                            <a key={index} href="#">
                              {category}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4">
                        <div className="action-dots float-end">
                          <button
                            className="action-btn dropdown-toggle"
                            type="button"
                            id="action-dropdown"
                            aria-controls={anchorEl ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={anchorEl ? "true" : undefined}
                            onClick={handleDropClick}
                          >
                            <span></span>
                          </button>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleDropClose}
                          >
                            {job.actions.map((action, index) => (
                              <MenuItem key={index}>
                                <a
                                  className="dropdown-item"
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    gap: "10px",
                                  }}
                                >
                                  <img
                                    alt="icon"
                                    loading="lazy"
                                    width="17"
                                    height="14"
                                    decoding="async"
                                    data-nimg="1"
                                    className="lazy-img"
                                    style={{
                                      color: "transparent",
                                      marginTop: "5px",
                                    }}
                                    src={action.icon}
                                  />
                                  {action.name}
                                </a>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dash-pagination d-flex justify-content-end mt-30">
                <ul className="style-none d-flex align-items-center">
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>..</li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </div>
  );
};

export default JobSaved;
