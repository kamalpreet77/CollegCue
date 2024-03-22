import React, { useState } from "react";
import "./Company CSS/companyProfile.css";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuList,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompanyHeader from "./companyHeader";
const CompanyProfile = () => {
  // place dropdown
  const [country, setCountry] = useState("");

  const [countries, setCountries] = useState([
    { value: 21, label: "America" },
    { value: 22, label: "Australia" },
    { value: 23, label: "China" },
    { value: 24, label: "France" },
    { value: 25, label: "Geramany" },
    { value: 26, label: "India" },
    { value: 27, label: "United Kingdom" },
    // Add more countries as needed
  ]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const [city, setCity] = useState("");

  const [cities, setCities] = useState([
    { value: 1, label: "Sydney" },
    { value: 2, label: "Tokyo" },
    { value: 3, label: "Shanghau" },
    { value: 4, label: "Delhi" },
    { value: 5, label: "Mumbai" },
    { value: 6, label: "Banglore" },
    { value: 7, label: "Luckhnow" },
    // Add more cities as needed
  ]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const [state, setState] = useState("");

  const [states, setStates] = useState([
    { value: 11, label: "Sydney" },
    { value: 12, label: "Tokyo" },
    { value: 13, label: "Delhi" },
    { value: 14, label: "Shanghai" },
    { value: 15, label: "Mumbai" },
    { value: 16, label: "Bangalore" },
    { value: 17, label: "London" },
    // Add more states as needed
  ]);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <div className="dashboard-body">
          <div className="position-relative">
            <CompanyHeader />
            <h2 className="main-title">Profile</h2>

            <Box
              sx={{
                margin: "25px",
                borderRadius: "25px",
                backgroundColor: "white",
                height: "1325px",
                paddingTop: "0.25px",
              }}
            >
              <Card
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "#f0f5f3",
                }}
              >
                <div className="bg-white card-box border-20">
                  <div className="user-avatar-setting d-flex align-items-center mb-30">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="68"
                      height="68"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img user-img"
                      style={{ color: "transparent" }}
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_26.98d48d45.png&w=48&q=75"
                    />
                    <div className="upload-btn position-relative tran3s ms-4 me-3">
                      Upload Company Logo
                      <input
                        type="file"
                        id="uploadImg"
                        placeholder=""
                        name="uploadImg"
                      />
                    </div>
                    <button className="delete-btn tran3s">Delete</button>
                  </div>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Company Name*</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Email*</label>
                        <input
                          type="email"
                          placeholder="companyinc@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Website*</label>
                        <input
                          type="text"
                          placeholder="http://somename.come/"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Founded Date*</label>
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Company Size*</label>
                        <input type="text" placeholder="700" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Phone Number*</label>
                        <input type="tel" placeholder="+xx xxxxx123" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dash-input-wrapper mb-30">
                        <label for="">Category*</label>
                        <input
                          type="text"
                          placeholder="Account, Finance, Marketing"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dash-input-wrapper">
                    <label for="">About Company*</label>
                    <textarea
                      className="size-lg"
                      placeholder="Write something interesting about you...."
                    ></textarea>
                    <div className="alert-text">
                      Brief description for your company. URLs are hyperlinked.
                    </div>
                  </div>
                </div>
              </Card>
            </Box>
            <Box
              sx={{
                margin: "25px",
                borderRadius: "25px",
                backgroundColor: "white",
                height: "720px",
                paddingTop: "0.25px",
              }}
            >
              <Card
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "#f0f5f3",
                }}
              >
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Social Media</h4>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 1</label>
                    <input type="text" placeholder="https://www.linked.com/" />
                  </div>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 2</label>
                    <input
                      type="text"
                      placeholder="https://twitter.com/FIFAcom"
                    />
                  </div>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 3</label>
                    <input
                      type="text"
                      placeholder="https://www.instagram.com/"
                    />
                  </div>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">Network 4</label>
                    <input
                      type="text"
                      placeholder="https://www.facebook.com/"
                    />
                  </div>
                  <a href="#" className="dash-btn-one">
                    <i className="bi bi-plus"></i> Add more link
                  </a>
                </div>
              </Card>
            </Box>

            <Box
              sx={{
                margin: "25px",
                borderRadius: "25px",
                backgroundColor: "white",
                height: "1175px",
                paddingTop: "0.25px",
              }}
            >
              <Card
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "#f0f5f3",
                }}
              >
                <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Address &amp; Location</h4>
                  <div className="row">
                    <div className="col-12">
                      <div className="dash-input-wrapper mb-25">
                        <label for="">Address*</label>
                        <input
                          type="text"
                          placeholder="Cowrasta, Chandana, Gazipur Sadar"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120, bgcolor:"white" }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              City*
                            </InputLabel>
                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={city}
                              label="City"
                              onChange={handleCityChange}
                            >
                              {cities.map((city) => (
                                <MenuItem
                                  key={city.value}
                                  value={city.value}
                                  className="option"
                                >
                                  {city.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120,bgcolor:"white" }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              State*
                            </InputLabel>
                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={state}
                              label="Country"
                              onChange={handleStateChange}
                            >
                              {states.map((state) => (
                                <MenuItem
                                  key={state.value}
                                  value={state.value}
                                  className="option"
                                >
                                  {state.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>

                      <div className="col-lg-3">
                        <Box
                          sx={{ minWidth: 120,bgcolor:"white" }}
                          className="dash-input-wrapper mb-25"
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Country*
                            </InputLabel>
                            <Select
                              className="list"
                              role="menubar"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={country}
                              label="Country"
                              onChange={handleCountryChange}
                            >
                              {countries.map((country) => (
                                <MenuItem
                                  key={country.value}
                                  value={country.value}
                                  className="option"
                                >
                                  {country.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div className="col-lg-3">
                        <div className="dash-input-wrapper mb-25">
                          <label htmlFor="">Zip Code*</label>
                          <input type="number" placeholder="1708" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="dash-input-wrapper mb-25">
                        <label htmlFor="">Map Location*</label>
                        <div className="position-relative">
                          <input
                            type="text"
                            placeholder="XC23+6XC, Moiran, N105"
                          />
                          <button className="location-pin tran3s">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="17"
                              height="17"
                              decoding="async"
                              data-nimg="1"
                              className="lazy-img m-auto"
                              style={{ color: "transparent" }}
                              src="../../_next/static/media/icon_16.7e4bc712.svg"
                            />
                          </button>
                        </div>
                        <div className="map-frame mt-30">
                          <div className="gmap_canvas h-100 w-100">
                            <iframe
                              className="gmap_iframe h-100 w-100"
                              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bass%20hill%20plaza%20medical%20centre&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Box>
            <Card style={{ margin: "25px", borderRadius: "25px" }}>
              <div className="bg-white card-box border-20 mt-40">
                <h4 className="dash-title-three">Members</h4>
                <div className="dash-input-wrapper">
                  <label for="">Add &amp; Remove Member</label>
                </div>
                <div className="accordion dash-accordion-one" id="accordionOne">
                  <Accordion
                    sx={{ backgroundColor: "#f0f5f3" }}
                    className="accordion-item"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      className="accordion-header"
                      id="headingOne"
                    >
                      Add Member 1*
                    </AccordionSummary>

                    <AccordionDetails
                      style={{ display: "flex", flexDirection: "column" }}
                      className="accordion-body"
                    >
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="dash-input-wrapper mb-30 md-mb-10">
                            <label for="">Company Name*</label>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="dash-input-wrapper mb-30">
                            <input
                              type="text"
                              placeholder="Product Designer (Google)"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="dash-input-wrapper mb-30 md-mb-10">
                            <label for="">Designation*</label>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="dash-input-wrapper mb-30">
                            <input type="text" placeholder="Account Manager" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="dash-input-wrapper mb-30 md-mb-10">
                            <label for="">Email*</label>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="dash-input-wrapper mb-30">
                            <input
                              type="email"
                              placeholder="newmmwber@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-20">
                        <a href="#" className="dash-btn-one">
                          Remove
                        </a>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <a
                  style={{ marginTop: "10px" }}
                  href="#"
                  className="dash-btn-one"
                >
                  <i className="bi bi-plus"></i> Add Another Member
                </a>
              </div>
            </Card>

            <div
              style={{ margin: "25px" }}
              className="button-group d-inline-flex align-items-center mt-30"
            >
              <a href="#" className="dash-btn-two tran3s me-3">
                Save
              </a>
              <a href="#" className="dash-cancel-btn tran3s">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default CompanyProfile;
