import React, { useState } from "react";
import "./Company CSS/companyDashboard.css";
import {
  Box,
  Menu,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import CompanyHeader from "./companyHeader";

const ComapanyDashboard = () => {
  // dashboard info
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (itemName) => {
    setActiveMenu(itemName);
  };

  // action dropdown
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
  };

  const dashboardData = [
    {
      title: "Total Visitor",
      icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_12.7f76845e.svg",
      value: "1.7k+",
      link: "/job-portal/dashboard/company-dashboard/jobPost",
      activeMenu: "jobPost",
    },
    {
      title: "Shortlisted",
      icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_13.d248bf19.svg",
      value: "03",
      link: "/job-portal/dashboard/company-dashboard/savedProfile",
      activeMenu: "savedProfile",
    },
    {
      title: "Views",
      icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg",
      value: "2.1k",
      link: "/job-portal/dashboard/company-dashboard",
      activeMenu: "/",
    },
    {
      title: "Posted Job",
      icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_15.0025ba7e.svg",
      value: "07",
      link: "/job-portal/dashboard/company-dashboard",
      activeMenu: "/",
    },
  ];

  const jobData = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_22.142b36c3.png",
      title: "Fulltime",
      content: "Fulltime . Spain, Barcelona",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_23.20c2dd37.png",
      title: "Part time",
      content: "Fulltime . USA, New York",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_24.cfe1701c.png",
      title: "Part time",
      content: "Fulltime . USA, Alaska",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_25.7b6a766b.png",
      title: "Fulltime",
      content: "Fulltime . USA, California",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_26.98d48d45.png",
      title: "Fulltime",
      content: "Fulltime . UK, London",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/media_33.a06e8b26.png",
      title: "Fixed-Price",
      content: "Fulltime . USA, Mountain View",
      actions: [
        { label: "View Job", link: "#" },
        { label: "Archive", link: "#" },
        { label: "Delete", link: "#" },
      ],
    },
  ];

  const [jobs, setJobs] = useState("");

  const [jobRole, setJObRole] = useState([
    { value: 1, role: "Web & Mobile Developer" },
    { value: 2, role: "Document writer" },
    { value: 3, role: "Outbound call service" },
    { value: 4, role: "Product Designer" },
  ]);

  const handleJobChange = (e) => {
    setJobs(e.target.value);
  };

  return (
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <div className="dashboard-body">
          <div className="position-relative">
            <CompanyHeader />
            <h2 className="main-title">Dashboard</h2>

            <div className="row">
              {dashboardData.map((item, index) => (
                <div className="col-lg-3 col-6" key={index}>
                  <div className="dash-card-one bg-white border-30 position-relative mb-15">
                    <div
                      style={{ marginTop: "20px" }}
                      className="d-sm-flex align-items-center justify-content-between"
                    >
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                        <button
                          className={
                            activeMenu === item.activeMenu ? "active" : ""
                          }
                          onClick={() => handleMenuClick(item.activeMenu)}
                        >
                          <Link to={item.link}>
                            <img
                              alt="icon"
                              loading="lazy"
                              width="21"
                              height="26"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img"
                              style={{ color: "transparent", marginTop: "5px" }}
                              src={item.icon}
                            />
                          </Link>
                        </button>
                      </div>
                      <div className="order-sm-0">
                        <div
                          style={{ height: "30px" }}
                          className="value fw-500"
                        >
                          {item.value}
                        </div>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="row d-flex pt-50 lg-pt-10"
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  margin: "30px",
                  width: "450px",
                  height: "680px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f0f5f3",
                    borderRadius: "20px",
                    margin: "30px",
                    width: "400px",
                    marginLeft: "16px",
                  }}
                  className="col-xl-7 col-lg-6 d-flex flex-column"
                >
                  <div className="user-activity-chart bg-white border-20 mt-30 h-100">
                    <h4 className="dash-title-two">Job Views</h4>
                    
                      <FormControl
                        sx={{
                          width: "50%",
                          marginLeft: "25%",
                          marginTop: "20px",
                          bgcolor:"white"
                        }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Jobs
                        </InputLabel>
                        <Select
                          className="list"
                          role="menubar"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={jobs}
                          label="Jobs"
                          onChange={handleJobChange}
                        >
                          {jobRole.map((jobs) => (
                            <MenuItem
                              key={jobs.value}
                              value={jobs.value}
                              className="option"
                            >
                              {jobs.role}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    
                    <div className="ps-5 pe-5 mt-50">
                      <img
                        alt="main-graph"
                        loading="lazy"
                        width="608"
                        height="375"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&w=640&q=75"
                      />
                    </div>
                  </div>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  margin: "30px",
                  width: "450px",
                  height: "680px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f0f5f3",
                    borderRadius: "20px",
                    margin: "30px",
                    width: "400px",
                    height: "625px",
                    marginLeft: "16px",
                  }}
                  className="col-xl-5 col-lg-6 d-flex"
                >
                  <div className="recent-job-tab bg-white border-20 mt-30 w-100">
                    <h4 className="dash-title-two">Posted Job</h4>

                    <div className="wrapper">
                      {jobData.map((item, index) => (
                        <div
                          className="job-item-list d-flex align-items-center"
                          key={index}
                        >
                          <div>
                            <img
                              alt="logo"
                              loading="lazy"
                              width="40"
                              height="40"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img logo"
                              style={{ color: "transparent" }}
                              src={item.image}
                            />
                          </div>
                          <div className="job-title">
                            <h6 className="mb-5">
                              <a href="#">{item.title}</a>
                            </h6>
                            <div className="meta">
                              <span>{item.content}</span>
                            </div>
                          </div>
                          <div className="job-action">
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
                              {item.actions.map((action, idx) => (
                                <MenuItem key={idx}>
                                  <a
                                    className="dropdown-item"
                                    href={action.link}
                                  >
                                    {action.label}
                                  </a>
                                </MenuItem>
                              ))}
                            </Menu>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default ComapanyDashboard;
