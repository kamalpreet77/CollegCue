import React from 'react';
import Country from '../../components/Country/Country';
import { TopPlacesData, TopCollegesData, CollegeArticleData, AcadCounsellor, CollegeChooseData, FCCard, CollegeRankingData, ApplicationDatesData, ScholarshipData, ExamsData, GermanyFAQsData } from "./Data"

const GermanyPage = () => {

  const countryName = "Germany"

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
        FAQs={GermanyFAQsData}
      />
    </>
  )
}

export default GermanyPage;
