import React, { useState } from "react";
import { Card, Box, Typography, Menu, MenuItem, MenuList, FormControl, InputLabel, Select } from "@mui/material";
import "./Company CSS/jobPost.css";
import CompanyHeader from "./companyHeader";

const JobPost = () => {
  // action dropdown

  const [sortby, setSortby] = useState("");
  const [sortAction, setSortAction] = useState([
    { value: 1, sortBy: "Active" },
    { value: 2, sortBy: "Pending" },
    { value: 3, sortBy: "Expired" },
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

  const jobItems = [
    {
      name: "Brand & Product Designer",
      info: "Fulltime . Spain",
      date: "05 Jun, 2023",
      applications: 130,
      status: "Active",
      bgcolor: "Green",

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
      name: "Marketing Specialist",
      info: "Fulltime . USA",
      date: "27 Sep, 2023",
      applications: 278,
      status: "Expired",
      bgcolor: "Red",

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
      name: "Accounting Managert",
      info: "Part-time . Uk",
      date: "13 Aug, 2023",
      applications: 20,
      status: "Pending",
      bgcolor: "Yellow",
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
      name: "Developer for IT company",
      info: "Fulltime . Germany",
      date: "14 Feb, 2023",
      applications: 70,
      status: "Active",
      bgcolor: "Green",
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
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <div className="dashboard-body">
          <div className="position-relative">
            <CompanyHeader />

            <div className="d-sm-flex align-items-center justify-content-between mb-40 lg-mb-30">
              <h2 className="main-title m0">My Jobs</h2>
              <div className="d-flex ms-auto xs-mt-30">
                <div
                 
                  className="nav nav-tabs tab-filter-btn me-4"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                  style={{height:"5vh", width:"5vw",marginTop:"30px" }}
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#a1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    All
                  </button>
                  <button
                  style={{height:"5vh", width:"7vw",marginTop:"30px" }}
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#a2"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    New
                  </button>
                </div>
                <div className="short-filter d-flex align-items-center ms-auto">
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
            </div>

            <Card style={{ margin: "25px", borderRadius: "25px" }}>
              <div className="bg-white card-box border-20">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="a1"
                    role="tabpanel"
                  >
                    <div className="table-responsive">
                      <table className="table job-alert-table">
                        <thead>
                          <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Job Created</th>
                            <th scope="col">Applicants</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody className="border-0">
                          {jobItems.map((jobItem, index) => (
                            <tr
                              key={index}
                              className={
                                jobItem.status === "active"
                                  ? "active"
                                  : "pending"
                              }
                            >
                              <td>
                                <div className="job-name fw-500">
                                  {jobItem.name}
                                </div>
                                <div className="info1">{jobItem.info}</div>
                              </td>
                              <td>{jobItem.date}</td>
                              <td>{`${jobItem.applications} Applications`}</td>
                              <td>
                                <div>{jobItem.status}</div>
                              </td>
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
                                    aria-expanded={
                                      anchorEl ? "true" : undefined
                                    }
                                    onClick={handleDropClick}
                                  >
                                    <span></span>
                                  </button>
                                  <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleDropClose}
                                  >
                                    {jobItem.actions.map((action, index) => (
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
                </div>
              </div>
            </Card>
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
  );
};

export default JobPost;
