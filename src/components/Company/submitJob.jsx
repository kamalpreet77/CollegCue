import React, { useState } from "react";
import {
  Card,
  Select,
  Box,
  FormControl,
  InputLabel,
  Menu,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import "./Company CSS/submitJob.css";
import CompanyHeader from "./companyHeader";

const SubmitJob = () => {
  // job detail dropdown
  const [jobCategory, setJobCategory] = useState("");
  const [jobCategories, setJobCategories] = useState([
    { value: 1, catagory: "Designer" },
    { value: 2, catagory: "IT & Development" },
    { value: 3, catagory: "Web & Mobile Dev." },
    { value: 4, catagory: "Content Writing" },
  ]);

  const handleCategoryChange = (e) => {
    setJobCategory(e.target.value);
  };

  const [jobType, setJobType] = useState("");
  const [jobTypes, setJobTypes] = useState([
    { value: 1, type: "Full Time" },
    { value: 2, type: "Part Time" },
    { value: 3, type: "Hourly-Contract" },
    { value: 4, type: "Fixed-Price" },
  ]);

  const handleTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const [salary, setSalary] = useState("");
  const [stipend, setStipend] = useState([
    { value: 1, duration: "Anually" },
    { value: 2, duration: "Monthly" },
    { value: 3, duration: "Weekly" },
    { value: 4, duration: "Per-Day" },
  ]);

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const [experience, setExperience] = useState("");
  const [experiences, setExperiences] = useState([
    { value: 1, duration: "Fresher" },
    { value: 2, duration: "Mid-Senior" },
    { value: 3, duration: "Associate" },
    { value: 4, duration: "Expert" },
  ]);

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([
    { value: 1, place: "Washington DC" },
    { value: 2, place: "Calafornia" },
    { value: 3, place: "New York" },
    { value: 4, place: "Miami" },
  ]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const [industry, setIndustry] = useState("");
  const [industries, setIndustries] = useState([
    { value: 1, place: "Industry1" },
    { value: 2, place: "Industry2" },
    { value: 3, place: "Industry3" },
    { value: 4, place: "Industry4" },
  ]);

  const handleInustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const [fluency, setFluency] = useState("");
  const [englishFluency, setEnglishFluency] = useState([
    { value: 1, level: "Basic" },
    { value: 2, level: "Conversational" },
    { value: 3, level: "Fluent" },
    { value: 4, level: "Native" },
  ]);

  const handleFluencyChange = (e) => {
    setFluency(e.target.value);
  };

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
            <h2 className="main-title">Post a New Job</h2>

            <Box
              sx={{
                margin: "25px",
                borderRadius: "25px",
                backgroundColor: "white",
                height: "3070px",
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
                  <h4 className="dash-title-three">Job Details</h4>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Job Title*</label>
                    <input type="text" placeholder="Ex: Product Designer" />
                  </div>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Job Description*</label>
                    <textarea
                      className="size-lg"
                      placeholder="Write about the job in details..."
                    ></textarea>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Job Category*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={jobCategory}
                            label="JobCategory"
                            onChange={handleCategoryChange}
                          >
                            {jobCategories.map((jobCategory) => (
                              <MenuItem
                                key={jobCategory.value}
                                value={jobCategory.value}
                                className="option"
                              >
                                {jobCategory.catagory}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Job Type*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={jobType}
                            label="jobType"
                            onChange={handleTypeChange}
                          >
                            {jobTypes.map((jobType) => (
                              <MenuItem
                                key={jobType.value}
                                value={jobType.value}
                                className="option"
                              >
                                {jobType.type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Salary*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={salary}
                            label="Salary"
                            onChange={handleSalaryChange}
                          >
                            {stipend.map((salary) => (
                              <MenuItem
                                key={salary.value}
                                value={salary.value}
                                className="option"
                              >
                                {salary.duration}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-3">
                      <div className="dash-input-wrapper mb-30">
                        <input type="text" placeholder="Min" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dash-input-wrapper mb-30">
                        <input type="text" placeholder="Max" />
                      </div>
                    </div>
                  </div>
                  <h4 className="dash-title-three pt-50 lg-pt-30">
                    Skills &amp; Experience
                  </h4>
                  <div className="dash-input-wrapper mb-30">
                    <label for="">Skills*</label>
                    <input type="text" placeholder="Add Skills" />
                    <div className="skill-input-data d-flex align-items-center flex-wrap">
                      <button>Design</button>
                      <button>UI</button>
                      <button>Digital</button>
                      <button>Graphics</button>
                      <button>Developer</button>
                      <button>Product</button>
                      <button>Microsoft</button>
                      <button>Brand</button>
                      <button>Photoshop</button>
                      <button>Business</button>
                      <button>IT &amp; Technology</button>
                      <button>Marketing</button>
                      <button>Article</button>
                      <button>Engineer</button>
                      <button>HTML5</button>
                      <button>Figma</button>
                      <button>Automobile</button>
                      <button>Account</button>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Experience*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={experience}
                            label="Experience"
                            onChange={handleExperienceChange}
                          >
                            {experiences.map((experience) => (
                              <MenuItem
                                key={experience.value}
                                value={experience.value}
                                className="option"
                              >
                                {experience.duration}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Location*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            label="Location"
                            onChange={handleLocationChange}
                          >
                            {locations.map((location) => (
                              <MenuItem
                                key={location.value}
                                value={location.value}
                                className="option"
                              >
                                {location.place}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-30"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Industry*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={industry}
                            label="Industry"
                            onChange={handleInustryChange}
                          >
                            {industries.map((industry) => (
                              <MenuItem
                                key={industry.value}
                                value={industry.value}
                                className="option"
                              >
                                {industry.place}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-md-6">
                      <Box
                        sx={{ bgcolor: "white" }}
                        className="dash-input-wrapper mb-25"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            English Fluency*
                          </InputLabel>
                          <Select
                            className="list"
                            role="menubar"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fluency}
                            label="English Fluency"
                            onChange={handleFluencyChange}
                          >
                            {englishFluency.map((fluency) => (
                              <MenuItem
                                key={fluency.value}
                                value={fluency.value}
                                className="option"
                              >
                                {fluency.level}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>
                  <h4 className="dash-title-three pt-50 lg-pt-30">
                    File Attachment
                  </h4>
                  <div className="dash-input-wrapper mb-20">
                    <label for="">File Attachment*</label>
                    <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                      <span>guidline&amp;requirments.doc</span>
                      <a href="#" className="remove-btn">
                        <i className="bi bi-x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="dash-btn-one d-inline-block position-relative me-3">
                    <i className="bi bi-plus"></i>Upload File
                    <input
                      type="file"
                      id="uploadCV"
                      placeholder=""
                      name="uploadCV"
                    />
                  </div>
                  <small>Upload file .pdf, .doc, .docx</small>
                  <h4 className="dash-title-three pt-50 lg-pt-30">
                    Address &amp; Location
                  </h4>
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
                      <div className="col-lg-4">
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
                      <div className="col-lg-4">
                        <Box
                          sx={{ minWidth: 120, bgcolor:"white" }}
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

                      <div className="col-lg-4">
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
                    </div>
                    <div className="col-12">
                      <div className="dash-input-wrapper mb-25">
                        <label for="">Map Location*</label>
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
            <div
              style={{ margin: "25px" }}
              className="button-group d-inline-flex align-items-center mt-30"
            >
              <a href="#" className="dash-btn-two tran3s me-3">
                Next
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

export default SubmitJob;
