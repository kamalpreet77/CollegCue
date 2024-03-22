import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assets/collegecue.png";
import { Link } from "react-router-dom";
import "./CSS/sidemenu.css";
import { Button, Menu, MenuItem, Modal } from "@mui/material";
import DeleteAcc from "./deleteAcc";

const SideMenu = () => {
  //routing
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (itemName) => {
    setActiveMenu(itemName);
  };

  // sidemenu dropdown

  const [anchorEl, setAnchorEl] = useState(null);
  const [drop, setDrop] = useState(false);

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
    setDrop(true);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
    setDrop(false);
  };

  //pop up on delete

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // dynamicity in side menu => progress bar

  return (
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <aside className="dash-aside-navbar">
          <div className="position-relative">
            <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
              <Link to="/">
                <img
                  alt="logo"
                  fetchpriority="high"
                  width="125"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent", backgroundColor: "blue" }}
                  src={logo}
                />
              </Link>
              <button className="close-btn d-block d-md-none">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="user-data">
              <div className="user-avatar online position-relative rounded-circle">
                <img
                  alt="avatar"
                  loading="lazy"
                  width="75"
                  height="75"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img"
                  style={{ color: "transparent", height: "auto" }}
                  src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01.2651497f.jpg&w=96&q=75"
                />
              </div>
              <div className="user-name-data">
                <button
                  className="user-name dropdown-toggle"
                  type="button"
                  id="profile-dropdown"
                  aria-controls={drop ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={drop ? "true" : undefined}
                  onClick={handleDropClick}
                >
                  James Brower
                </button>

                <Menu anchorEl={anchorEl} open={drop} onClose={handleDropClose}>
                  <MenuItem
                    sx={{ gap: "15px" }}
                    className={activeMenu === "profile" ? "active" : ""}
                    onClick={() => handleMenuClick("profile")}
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="18"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_23.569a9456.svg"
                    />
                    <Link to="/job-portal/dashboard/candidate-dashboard/myProfile">
                      <span> Profile</span>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    sx={{ gap: "15px" }}
                    className={activeMenu === "settings" ? "active" : ""}
                    onClick={() => handleMenuClick("settings")}
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="21"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/static/media/icon_24.0ace9f1a.svg"
                    />
                    <Link to="/job-portal/dashboard/candidate-dashboard/accountSettings">
                      <span>Account Settings</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <nav className="dasboard-main-nav">
              <ul className="style-none">
                <li
                  className={activeMenu === "dashboard" ? "active" : ""}
                  onClick={() => handleMenuClick("/")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_1.2012e511.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard">
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li
                  className={activeMenu === "profile" ? "active" : ""}
                  onClick={() => handleMenuClick("profile")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_2.bb2a8c78.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/myProfile">
                    <span>My Profile</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "resume" ? "active" : ""}
                  onClick={() => handleMenuClick("resume")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_3.1dfe15d1.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/resume">
                    <span>Resume</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "messages" ? "active" : ""}
                  onClick={() => handleMenuClick("messages")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_4.7fb6e150.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/messages">
                    <span>Messages</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "jobAlert" ? "active" : ""}
                  onClick={() => handleMenuClick("jobAlert")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_5.7bc7faef.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/jobAlert">
                    <span>Job Alert</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "jobSaved" ? "active" : ""}
                  onClick={() => handleMenuClick("jobSaved")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="18"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_6.70ec5244.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/savedJob">
                    <span>Saved Job</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "settings" ? "active" : ""}
                  onClick={() => handleMenuClick("settings")}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="23"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_7.9db14e45.svg"
                  />
                  <Link to="/job-portal/dashboard/candidate-dashboard/accountSettings">
                    <span>Account Settings</span>
                  </Link>
                </li>

                <li
                  onClick={handleOpen}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "15px",
                    marginTop: "25px",
                  }}
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="23"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent", marginTop: "22px" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_8.1d18804d.svg"
                  />

                  <Link>
                    <span>Delete Account</span>
                  </Link>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <DeleteAcc />
                  </Modal>
                </li>
              </ul>
            </nav>
            <div className="profile-complete-status">
              <div className="progress-value fw-500">87%</div>
              <div className="progress-line position-relative">
                <div className="inner-line" style={{ width: "80%" }}></div>
              </div>
              <p>Profile Complete</p>
            </div>
            <Link to="/"
              /*href="#"*/ className="d-flex w-100 align-items-center logout-btn"
            >
              <img
                alt="icon"
                loading="lazy"
                width="23"
                height="22"
                decoding="async"
                data-nimg="1"
                className="lazy-img"
                style={{ color: "transparent" }}
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_9.69f19313.svg"
              />
              <span>Logout</span>
            </Link>
          </div>
        </aside>
        
      </div>
    </div>
  );
};

export default SideMenu;
