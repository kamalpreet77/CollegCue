import React, { useState } from "react";
import "./CSS/settings.css";
import {
  Box,
  Button,
  Card,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Header from "./header";

const Settings = () => {
  

  return (
    <div>
      <div className="__variable_e76efa __variable_95782f">
        <div className="main-page-wrapper">
          <div className="dashboard-body">
            <div className="position-relative">
              
              <Header/>

              <h2 className="main-title">Account Settings</h2>

              <Box
                sx={{
                  margin: "25px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  height: "710px",
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
                    <h4 className="dash-title-three">Edit &amp; Update</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="dash-input-wrapper mb-20">
                            <label for="">First Name</label>
                            <input type="text" placeholder="John Doe" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="dash-input-wrapper mb-20">
                            <label for="">Last Name</label>
                            <input type="text" placeholder="Kabir" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="dash-input-wrapper mb-20">
                            <label for="">Email</label>
                            <input
                              type="email"
                              placeholder="johndoe@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="dash-input-wrapper mb-20">
                            <label for="">Phone Number</label>
                            <input type="tel" placeholder="+810 321 889 021" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="dash-input-wrapper mb-20">
                            <label for="">Password</label>
                            <input type="password" />
                          </div>
                        </div>
                      </div>
                      <div className="button-group d-inline-flex align-items-center mt-30">
                        <a
                          href="#"
                          className="dash-btn-two tran3s me-3 rounded-3"
                        >
                          Save
                        </a>
                        <a href="#" className="dash-cancel-btn tran3s">
                          Cancel
                        </a>
                      </div>
                    </form>
                  </div>
                </Card>
              </Box>

              <div className="mt-45">
                <div className="position-relative">
                  <h2 className="main-title">Change Password</h2>
                  <Box
                    sx={{
                      margin: "25px",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      height:"510px",
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
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <div className="dash-input-wrapper mb-20">
                                <label for="">Old Password*</label>
                                <input type="password" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="dash-input-wrapper mb-20">
                                <label for="">New Password*</label>
                                <input type="password" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="dash-input-wrapper mb-20">
                                <label for="">Confirm Password*</label>
                                <input type="password" />
                              </div>
                            </div>
                          </div>
                          <div className="button-group d-inline-flex align-items-center">
                            <a
                              href="#"
                              className="dash-btn-two tran3s rounded-3"
                            >
                              Save &amp; Updated
                            </a>
                          </div>
                        </form>
                      </div>
                    </Card>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Toastify"></div>
        
      </div>
    </div>
  );
};

export default Settings;
