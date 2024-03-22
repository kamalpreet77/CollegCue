import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assets/collegecue.png";
import { Link } from "react-router-dom";

import "./Company CSS/companySidemenu.css";
import { Button, Menu, MenuItem, Modal } from "@mui/material";
import CommingSoon from "./commingSoon";
import DeleteAcc from "../Candidate/deleteAcc";

//import CommingSoon from "./commingSoon";

const CompanySideMenu = () => {
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

  // pop on profile evaluator

  const [pop, setPop] = useState(false);
  const handleProfileOpen = () => setPop(true);
  const handleProfileClose = () => setPop(false);

  //pop up on delete

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //const [isOpen, setIsOpen] = useState(false);

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
                  width="119"
                  height="42"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent",  backgroundColor:"blue" }}
                  
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
                  
                  src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_26.98d48d45.png&w=48&q=75"
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
                  Four Leaves
                </button>

                <Menu
                  //className="dropdown-menu"
                  //id="basic-menu"

                  anchorEl={anchorEl}
                  open={drop}
                  onClose={handleDropClose}
                >
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
                    <Link to="/job-portal/dashboard/company-dashboard/companyProfile">
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
                    <Link to="/job-portal/dashboard/company-dashboard/accountSettings">
                      <span>Account Settings</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <nav className="dasboard-main-nav">
              <ul className="style-none">
                <li
                  className={activeMenu === "compnyDashboard" ? "active" : ""}
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
                  <Link to="/job-portal/dashboard/company-dashboard">
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li
                  className={activeMenu === "companyProfile" ? "active" : ""}
                  onClick={() => handleMenuClick("companyProfile")}
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
                  <Link to="/job-portal/dashboard/company-dashboard/companyProfile">
                    <span>Company Profile</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "jobPost" ? "active" : ""}
                  onClick={() => handleMenuClick("jobPost")}
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
                  <Link to="/job-portal/dashboard/company-dashboard/jobPost">
                    <span>My Job Post</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "companyMessages" ? "active" : ""}
                  onClick={() => handleMenuClick("companyMessages")}
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
                  <Link to="/job-portal/dashboard/company-dashboard/companyMessages">
                    <span>Messages</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "submitJob" ? "active" : ""}
                  onClick={() => handleMenuClick("submitJob")}
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
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_39.e0d1c743.svg"
                  />
                  <Link to="/job-portal/dashboard/company-dashboard/submitJob">
                    <span>Submit Job Post</span>
                  </Link>
                </li>
                <li
                  className={activeMenu === "savedProfile" ? "active" : ""}
                  onClick={() => handleMenuClick("savedProfile")}
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
                  <Link to="/job-portal/dashboard/company-dashboard/savedProfile">
                    <span>Saved Profiles</span>
                  </Link>
                </li>
                
                <li
                  className={activeMenu === "Membership" ? "active" : ""}
                  onClick={() => handleMenuClick("Membership")}
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
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_40.5ae84fe9.svg"
                  />
                  <Link to="/job-portal/dashboard/company-dashboard/Membership">
                    <span>Membership</span>
                  </Link>
                </li>

                <li
                  className={activeMenu === "profileEvaluator" ? "active" : ""}
                  onClick={() => handleMenuClick("profileEvaluator")}
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
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg"
                  />
                  <Link to="/coming-soon">
                    <span>Profile Evaluator</span>
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
                  <Link to="/job-portal/dashboard/company-dashboard/accountSettings">
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
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen modal-dialog-centered">
            <div className="container">
              <div className="remove-account-popup text-center modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img
                  alt="icon"
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img m-auto"
                  style={{ color: "transparent" }}
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_22.2b286d7d.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySideMenu;
