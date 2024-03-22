import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, MenuList } from "@mui/material";
import "./Company CSS/membership.css";
import CompanyHeader from "./companyHeader";

const Membership = () => {
  const pricingData = [
    {
      plan: "Standard",
      price: "0",
      posting: "15 job posting",
      featuring: "7 featured job",
      live: "30 days",
    },
    {
      plan: "Gold",
      price: "27",
      posting: "30 job posting",
      featuring: "15 featured job",
      live: "60 days",
    },
    {
      plan: "Diamond",
      price: "39",
      posting: "60 job posting",
      featuring: "30 featured job",
      live: "130 days",
    },
  ];

  return (
    <div className="__variable_e76efa __variable_95782f">
      <div className="main-page-wrapper">
        <div className="dashboard-body">
          <div className="position-relative">
            <CompanyHeader />
            <h2 className="main-title">Membership</h2>
            <div className="membership-plan-wrapper mb-20">
              <div className="row gx-0">
                <div className="col-xxl-7 col-lg-6 d-flex flex-column">
                  <div className="column w-100 h-100">
                    <h4>Current Plan (Gold)</h4>
                    <p>
                      Unlimited access to our legal document library and online
                      rental application tool, billed monthly.
                    </p>
                  </div>
                </div>
                <div className="col-xxl-5 col-lg-6 d-flex flex-column">
                  <div className="column border-left w-100 h-100">
                    <div className="d-flex">
                      <h3 className="price m0">$29</h3>
                      <div className="ps-4 flex-fill">
                        <h6>Monthly Plan</h6>
                        <span className="text1 d-block">
                          Your subscription renews
                          <span className="fw-500"> July 12th, 2023</span>
                        </span>
                        <a href="#" className="cancel-plan tran3s">
                          Cancel Current Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="pricing-section">
              <div className="row justify-content-center">
                {pricingData.map((plan, index) => (
                  <div
                    key={index}
                    style={{ width: "300px" }}
                    className="col-lg-4 col-md-6"
                  >
                    <div
                      className={`pricing-card-one ${
                        index === 1 ? "popular-two" : ""
                      } border-0 mt-25`}
                    >
                      {index === 1 && (
                        <div className="popular-badge">popular</div>
                      )}
                      <div className="pack-name">{plan.plan}</div>
                      <div className="price fw-500">
                        {index !== 0 && <sub>$</sub>} {plan.price}
                        <sup>{index === 0 ? "" : ".99"}</sup>
                      </div>
                      <ul className="style-none">
                        <li>{plan.posting}</li>
                        <li>{plan.featuring}</li>
                        <li>Job post live for {plan.live}</li>
                      </ul>
                      <a href="#" className="get-plan-btn tran3s w-100 mt-30">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default Membership;
