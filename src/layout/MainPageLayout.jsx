import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";

const MainPageLayout = () => {
  const location = useLocation();
  const isComingSoon = location.pathname === '/coming-soon' || location.pathname.startsWith("/job-portal/dashboard/");

  return (
    <>
      {!isComingSoon && (
        <Box>
          <Navbar />
        </Box>
      )}
      <Box>
        <Outlet />
      </Box>
      {!isComingSoon && (
        <Box>
          <Footer />
        </Box>
      )}
    </>
  );
} 

export default MainPageLayout;
