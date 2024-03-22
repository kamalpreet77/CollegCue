import React, { useState } from "react";
import "./CSS/jobalert.css";
import { Box, Card, Menu, MenuItem, MenuList, Typography, FormControl, InputLabel, Select } from "@mui/material";
import Header from "./header";

const JobAlert = () => {
  // dynamicity => Title	Alert	Job	Time

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
      title: "Product Designer",
      post: "Fulltime",
      wage: "Yearly Salary . Germany",
      work: "Design, Product",
      finding: "Jobs found 2",
      time: "Weekly",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      title: "Marketing",
      post: "Part-Time",
      wage: "Weekly Salary . United kingdom",
      work: "Account, Marketing",
      finding: "Jobs found 13",
      time: "Monthly",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      title: "Hotel Manager",
      post: "Fulltime",
      wage: "Yearly Salary . Germany",
      work: "Design, Product",
      finding: "Jobs found 7",
      time: "Daily",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      title: "Developer",
      post: "Fulltime",
      wage: "Monthly Salary . United States",
      work: "Account, Finance",
      finding: "Jobs found 3",
      time: "Weekly",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
        },
      ],
    },
    {
      title: "Account Manager",
      post: "Part-Time",
      wage: "Hourly Salary . Spain",
      work: "Account, Finance",
      finding: "Jobs found 9",
      time: "Monthly",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
        },
        {
          label: "Delete",
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
                <h2 className="main-title m0">Job Alerts</h2>
                <div className="short-filter d-flex align-items-center">
                  <Box
                    sx={{ minWidth: 120, marginTop:"25px" }}
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

              <Card
                style={{
                  margin: "25px",
                  borderRadius: "25px",
                  //backgroundColor: "#f0f5f3",
                }}
              >
                <div className="bg-white card-box border-20">
                  <div className="table-responsive">
                    <table className="table job-alert-table">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Alert</th>
                          <th scope="col">Job</th>
                          <th scope="col">Time</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>

                      <tbody className="border-0">
                        {jobData.map((job, index) => (
                          <tr key={index}>
                            <td>{job.title}</td>
                            <td>
                              <div
                                className={`job-type fw-500 ${
                                  job.post === "Part-Time" ? "part-time" : ""
                                }`}
                              >
                                {job.post}
                              </div>
                              <div>{job.wage}</div>
                              <div>{job.work}</div>
                            </td>
                            <td>{job.finding}</td>
                            <td>{job.time}</td>
                            <td>
                              <div className="action-dots float-end">
                                <button
                                  className="action-btn dropdown-toggle"
                                  type="button"
                                  id="action-dropdown"
                                  aria-controls={
                                    anchorEl ? "basic-menu" : undefined
                                  }
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
                                  {job.actions.map((action, idx) => (
                                    <MenuItem key={idx}>
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
                                        {action.label}
                                      </a>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>

              <div
                style={{ margin: "25px" }}
                className="dash-pagination d-flex justify-content-end mt-30"
              >
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

export default JobAlert;
