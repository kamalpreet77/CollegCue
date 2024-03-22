import React from "react";

//import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import JobPost from "../../components/Company/jobPost";
import ComapanyDashboard from "../../components/Company/companyDashboard";
import CompanyProfile from "../../components/Company/companyProfile";
import CompanyMessages from "../../components/Company/companyMessages";
import SubmitJob from "../../components/Company/submitJob";
import SavedProfile from "../../components/Company/savedProfile";
import Membership from "../../components/Company/membership";
import Settings from "../../components/Candidate/settings";
import { Routes, Route } from "react-router-dom";
import CompanySideMenu from "../../components/Company/companySidemenu";
import ComingSoonPage from "../ComingSoonPage/ComingSoonPage";
//import ProfileEvaluator from "../../components/Company/profieEvaluator";

//import Dashboard from './components/dashboard';
//import Profile from './components/profile';



function Company() {
  return (
    <>
      <CompanySideMenu />
      <Routes>
        {/*<Dashboard/>*/}
        <Route path="/*" exact Component={ComapanyDashboard} />
        <Route path="/companyProfile" Component={CompanyProfile} />
        <Route path="/jobPost" Component={JobPost} />
        <Route path="/companyMessages" Component={CompanyMessages} />
        <Route path="/submitJob" Component={SubmitJob} />
        <Route path="/savedProfile" Component={SavedProfile} />
        <Route path="/Membership" Component={Membership} />
        <Route path="/profileEvaluator" Component={ComingSoonPage} />
        <Route path="/accountSettings" Component={Settings} />
      </Routes>
    </>
  );
}

export default Company;
