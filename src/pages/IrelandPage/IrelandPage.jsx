import React from 'react';
import { TopPlacesData, TopCollegesData, CollegeArticleData, AcadCounsellor, CollegeChooseData, FCCard, CollegeRankingData, ApplicationDatesData, ScholarshipData, ExamsData, IrelandFAQsData } from "./Data"
import Country from '../../components/Country/Country';

const IrelandPage = () => {

  const countryName = "Ireland"

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
        FAQs={IrelandFAQsData}
      />
    </>
  )
}

export default IrelandPage;
