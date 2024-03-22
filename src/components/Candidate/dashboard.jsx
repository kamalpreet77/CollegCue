import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import "./CSS/dashboard.css";
import { Link } from "react-router-dom";
import Header from "./header";

const Dashboard = () => {
  // dashboard info
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  // action dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
  };

  // dynamicity => info buttons/cards => conneted, Applied, Shortlisted and rejected => values
  //            => profile view => chart
  //            => recent applied job => img, title, content, + options

  // Define an array of dashboard card data
  const dashboardCards = [
    {
      title: "Connected",
      value: 100,
      iconSrc:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_12.7f76845e.svg",
      link: "/job-portal/dashboard/candidate-dashboard/messages",
      menu: "messages",
    },
    {
      title: "Applied",
      value: 20,
      iconSrc:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_15.0025ba7e.svg",
      link: "/job-portal/dashboard/candidate-dashboard",
      menu: "dashboard",
    },
    {
      title: "Shortlisted",
      value: 12,
      iconSrc:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg",
      link: "/job-portal/dashboard/candidate-dashboard/savedJob",
      menu: "jobSaved",
    },
    {
      title: "Rejected",
      value: 8,
      iconSrc:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/reject-53-671318.png?f=webp&w=128",
      link: "/job-portal/dashboard/candidate-dashboard/jobAlert",
      menu: "jobAlert",
    },
  ];

  // Define an array of job listings
  const jobListings = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_61.b310a81c.png&w=96&q=75",
      title: "Fixed-Price",
      content: "Fulltime",
      address: "USA, Palo Alto",
      actions: ["View Job", "Archive", "Delete"],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_60.fc342855.png&w=96&q=75",
      title: "Fulltime",
      content: "Fulltime",
      address: "USA, New York",
      actions: ["View Job", "Archive", "Delete"],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_59.4deaf874.png&w=96&q=75",
      title: "Part time",
      content: "Fulltime",
      address: "USA, San Jose",
      actions: ["View Job", "Archive", "Delete"],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_58.3df6f969.png&w=96&q=75",
      title: "Freelance",
      content: "Fulltime",
      address: "UK, Cupertino",
      actions: ["View Job", "Archive", "Delete"],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_57.429e6d57.png&w=96&q=75",
      title: "Part time",
      content: "Fulltime",
      address: "USA, Redmond",
      actions: ["View Job", "Archive", "Delete"],
    },
  ];

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <Header />

        <h2 className="main-title">Dashboard</h2>

        <div className="row">
          {dashboardCards.map((card, index) => (
            <div key={index}  className="col-lg-3 col-6">
              <div className="dash-card-one bg-white border-30 position-relative mb-15">
                <div style={{ marginTop:"20px"}} className="d-sm-flex align-items-center justify-content-between">
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                    <button
                      className={activeMenu === card.menu ? "active" : ""}
                      onClick={() => handleMenuClick(card.menu)}
                    >
                      <Link to={card.link}>
                        <img
                          alt="icon"
                          loading="lazy"
                          width="24" // You can customize the width and height as needed
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          className="lazy-img"
                          style={{ color: "transparent", marginTop: "5px" }}
                          src={card.iconSrc}
                        />
                      </Link>
                    </button>
                  </div>
                  <div  className="order-sm-0">
                    <div style={{ height:"30px"}} className="value fw-500">{card.value}</div>
                    <span>{card.title}</span>
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
              height: "585px",
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
                <h4 className="dash-title-two">Profile Views</h4>
                <div className="ps-5 pe-5 mt-50">
                  <img
                    alt="main-graph"
                    loading="lazy"
                    width="608"
                    height="375"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img m-auto"
                    src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&amp;w=1920&amp;q=75"
                    style={{ color: "transparent" }}
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
              height: "585px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f0f5f3",
                borderRadius: "20px",
                margin: "30px",
                width: "400px",
                height: "525px",
                marginLeft: "16px",
              }}
              className="col-xl-5 col-lg-6 d-flex"
            >
              <div className="recent-job-tab bg-white border-20 mt-30 w-100">
                <h4 className="dash-title-two">Recent Applied Job</h4>

                <div className="wrapper">
                  {jobListings.map((job, index) => (
                    <div
                      key={index}
                      className="job-item-list d-flex align-items-center"
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
                          src={job.image}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="job-title">
                        <h6 className="mb-5">
                          <a href="#">{job.title}</a>
                        </h6>
                        <div className="meta">
                          <span>{job.content}</span> .{" "}
                          <span>{job.address}</span>
                        </div>
                      </div>
                      <div className="job-action">
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
                          {job.actions.map((action, idx) => (
                            <MenuItem key={idx}>
                              <a className="dropdown-item" href="#">
                                {action}
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
  );
};

export default Dashboard;
