import React, { useState } from "react";
import { Box, Card, Popover } from "@mui/material";
import { Link } from "react-router-dom";

const DeleteAcc = () => {
  return (
    <Box
      sx={{
        marginTop: "200px",
        marginRight: "25px",
        
      }}
    >
      <div style={{backgroundColor: "#f0f5f3", zIndex:"99" }} className="remove-account-popup text-center modal-content">
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

        <h2>Are you sure?</h2>
        <p>Are you sure to delete your account? All data will be lost.</p>
        <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
          <Link to="/"  className="confirm-btn fw-500 tran3s me-3">
            Yes
          </Link>
          <button
            type="button"
            className="btn-close fw-500 ms-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Cancel
          </button>
        </div>
      </div>
    </Box>
  );
};

export default DeleteAcc;



