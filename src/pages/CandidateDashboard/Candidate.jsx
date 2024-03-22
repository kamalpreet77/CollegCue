import React from "react";
import SideMenu from "../../components/Candidate/sideMenu"
import Resume from "../../components/Candidate/resume";
import Dashboard from "../../components/Candidate/dashboard";
import Profile from "../../components/Candidate/profile";
import Messages from "../../components/Candidate/messages";
import JobAlert from "../../components/Candidate/jobAlert";
//import Dashboard from './components/dashboard';
//import Profile from './components/profile';
import JobSaved from "../../components/Candidate/jobSaved";
import Settings from "../../components/Candidate/settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";




function Candidate() {
  return (
    <>
      <Box>
        <SideMenu />
        <Routes>
          {/*<Dashboard/>*/}
          <Route path="/*" exact Component={Dashboard} />
          <Route path="/myProfile" Component={Profile} />
          <Route path="/resume" Component={Resume} />
          <Route path="/messages" Component={Messages} />
          <Route path="/jobAlert" Component={JobAlert} />
          <Route path="/savedJob" Component={JobSaved} />
          <Route path="/accountSettings" Component={Settings} />
        </Routes>
      </Box>
    </>
  );
}

export default Candidate;
