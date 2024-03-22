import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, MenuList, FormControl, InputLabel, Select } from "@mui/material";
import "./Company CSS/savedProfile.css";
import CompanyHeader from "./companyHeader";

const SavedProfile = () => {
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

  const candidates = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_01.d8f4e2e6.jpg&w=96&q=75",
      name: "Julia Ark",
      profile: "Graphic Designer",
      skills: ["Digital", "Design", "UI"],
      salary: "$30k-$50k yr",
      location: "California, US",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
          link: "#",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
          link: "#",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
          link: "#",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
          link: "#",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_02.877f69ad.jpg&w=96&q=75",
      name: "Lucille Whitley",
      profile: "Javascript Developer",
      skills: ["Java", "Developer", "code"],
      salary: "$3k-$4k mo",
      location: "London, UK",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
          link: "#",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
          link: "#",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
          link: "#",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
          link: "#",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_03.dbc81c65.jpg&w=96&q=75",
      name: "John Doe",
      profile: "UI/UX Designer",
      skills: ["Design", "Product", "UI"],
      salary: "$300k-$400k wk",
      location: "Dubai, UAE",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
          link: "#",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
          link: "#",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
          link: "#",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
          link: "#",
        },
      ],
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_04.20208423.jpg&w=96&q=75",
      name: "Larry Evans",
      profile: "Graphic Designer",
      skills: ["Digital", "UI", "Design"],
      salary: "$30k-$50k mo",
      location: "New York, US",
      actions: [
        {
          label: "View",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_18.0f7046f3.svg",
          link: "#",
        },
        {
          label: "Share",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_19.b2f1576b.svg",
          link: "#",
        },
        {
          label: "Edit",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_20.e619462a.svg",
          link: "#",
        },
        {
          label: "Delete",
          icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_21.1bede725.svg",
          link: "#",
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
            <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
              <h2 className="main-title m0">Saved Profiles</h2>
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

            <div className="wrapper">
              <div className="candidate-profile-card list-layout border-0 mb-25">
                {candidates.map((candidate, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: "#f0f5f3" }}
                    className="candidate-profile-card list-layout border-0 mb-25"
                  >
                    <div className="d-flex">
                      <div className="cadidate-avatar online position-relative d-block me-auto ms-auto">
                        <a href="#" className="rounded-circle">
                          <img
                            alt="image"
                            loading="lazy"
                            width="80"
                            height="80"
                            decoding="async"
                            data-nimg="1"
                            className="lazy-img rounded-circle"
                            style={{ color: "transparent", height: "auto" }}
                            src={candidate.image}
                          />
                        </a>
                      </div>
                      <div className="right-side">
                        <div className="row gx-1 align-items-center">
                          <div className="col-xl-3">
                            <div className="position-relative">
                              <h4 className="candidate-name mb-0">
                                <a href="#" className="tran3s">
                                  {candidate.name}
                                </a>
                              </h4>
                              <div className="candidate-post">
                                {candidate.post}
                              </div>
                              <ul className="cadidate-skills style-none d-flex align-items-center">
                                {candidate.skills.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                                {candidate.skills.length > 3 && (
                                  <li className="more">
                                    {candidate.skills.length - 3}+
                                  </li>
                                )}
                                <li className="more">2+</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            style={{
                              marginTop: "47.5px",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <div className="col-xl-3 col-md-4 col-sm-6">
                              <div className="candidate-info">
                                <span>Salary</span>
                                <div>{candidate.salary}</div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                              <div className="candidate-info">
                                <span>Location</span>
                                <div>{candidate.location}</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-4">
                            <div className="d-flex justify-content-md-end align-items-center">
                              <a
                                href="#"
                                className="save-btn text-center rounded-circle tran3s mt-10 fw-normal"
                              >
                                <i className="bi bi-eye"></i>
                              </a>
                              <div className="action-dots float-end mt-10 ms-2">
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
                                  {candidate.actions.map((action, index) => (
                                    <a
                                      className="dropdown-item"
                                      style={{
                                        width: "100%",
                                        display: "flex",
                                        gap: "10px",
                                        marginRight: "10px",
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
                                          marginLeft: "10px",
                                          marginTop: "5px",
                                          marginBottom: "5px",
                                        }}
                                        src={action.icon}
                                      />
                                      {action.label}
                                    </a>
                                  ))}
                                </Menu>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
  );
};

export default SavedProfile;
