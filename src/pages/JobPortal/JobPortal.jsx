import React from 'react'
import PageTitle from "../../components/Headings/PageTitle";
import HeroSection from './components/HeroSection';
import InnerTextSection from './components/InnerTextSection';
import GetTheJob from './components/GetTheJob';
import JobListing from './components/JobListing';
import TrustedBy from './components/TrustedBy';
import FaqPage from './components/Faq';
import FooterButtons from './components/FooterButtons';

const JobPortal = () => {
  return (
    <>
        
        <HeroSection/>
        <InnerTextSection/>
        <GetTheJob/>
        <JobListing/>
        <TrustedBy/>
        <FaqPage/>
        <FooterButtons/>
    </>
  )
}

export default JobPortal;