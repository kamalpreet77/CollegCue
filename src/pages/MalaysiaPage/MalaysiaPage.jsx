import React from 'react';
import { Container } from '@mui/material';
import SubPageTitle from '../../components/Headings/SubPageTitle';
import Country from '../../components/Country/Country';
import { TopPlacesData, TopCollegesData, CollegeArticleData, AcadCounsellor, CollegeChooseData, FCCard, CollegeRankingData, ApplicationDatesData, ScholarshipData, ExamsData, MalaysiaFAQsData } from "./Data"

const MalaysiaPage = () => {

  const countryName = "Malaysia"

  return (
    <>
      <Country
        countryName={countryName}
        //for TopPlaces 
        topPlaces={TopPlacesData}
        //for TopCOllages 
        topCollages={TopCollegesData}
        //for Article 
        Articles={CollegeArticleData}
        // for Counsellor
        Counsellor={AcadCounsellor}
        //for Collage Choose
        CollageChoose={CollegeChooseData}
        //for Found Collage
        FC={FCCard}
        //for COllage Ranking 
        Ranking={CollegeRankingData}
        //for Application 
        ApplicationDate={ApplicationDatesData}
        //for popularScholership
        Scholarship={ScholarshipData}
        // for Exam
        Exam={ExamsData}
        // for FAQ
        FAQs={MalaysiaFAQsData}
      />
    </>
  )
}

export default MalaysiaPage;
