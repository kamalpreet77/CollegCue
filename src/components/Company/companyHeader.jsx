import React, { useState } from "react";
import "./Company CSS/companyDashboard.css";
import { Typography, Menu, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";

const CompanyHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const notifications = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_36.d044b698.svg",
      message: "You have 3 new mails",
      time: "3 hours ago",
      unread: true,
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_37.34c12156.svg",
      message: "You have 5 new mails",
      time: "6 hours ago",
      unread: false,
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_38.2db06cc7.svg",
      message: "You have 7 new mails",
      time: "9 hours ago",
      unread: true,
    },
  ];

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="dashboard-header">
      <div className="d-flex align-items-center justify-content-end">
        <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
          <span></span>
        </button>
        <form className="search-form" action="#">
          <input type="text" placeholder="Search here.." />
          <button>
            <img
              alt="search"
              loading="lazy"
              width="16"
              height="17"
              decoding="async"
              data-nimg="1"
              className="lazy-img m-auto"
              style={{ color: "transparent" }}
              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.35c41a63.svg"
            />
          </button>
        </form>
        <div className="profile-notification ms-2 ms-md-5 me-4">
          <button
            className="noti-btn dropdown-toggle"
            type="button"
            id="notification-dropdown"
            aria-controls={anchorEl ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? "true" : undefined}
            onClick={handleDropClick}
          >
            <img
              alt="Notification"
              loading="lazy"
              width="21"
              height="24"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              style={{ color: "transparent" }}
              src="https://jobi-nextjs.vercel.app/_next/static/media/icon_11.32f89e94.svg"
            />
            <div className="badge-pill"></div>
          </button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropClose}
          >
            <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
              <MenuList className="style-none notify-list">
                {notifications.map((notification, index) => (
                  <MenuItem
                    key={index}
                    sx={{ gap: "15px" }}
                    className={`d-flex align-items-center ${
                      notification.unread ? "unread" : ""
                    }`}
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img icon"
                      src={notification.image}
                      style={{ color: "transparent" }}
                    />
                    <div className="flex-fill ps-2">
                      <Typography variant="inherit">
                        {notification.message}
                      </Typography>
                      <span className="time">{notification.time}</span>
                    </div>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Link to = "/job-portal/dashboard/company-dashboard/submitJob"
            className="job-post-btn tran3s"
            
          >
            Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CompanyHeader;
