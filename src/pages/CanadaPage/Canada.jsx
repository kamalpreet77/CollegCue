import React from 'react';
import Country from '../../components/Country/Country';
import {
  TopPlacesData, topCollegesCard, CollegeArticleData, AcadCounsellor, CollegeChooseData, FCCard, CollegeRankingData,
  ApplicationDatesData, PopularScholarshipData, ExamsData, CanadaFAQsData
} from "./Data"


const Canada = () => {

  const countryName = "Canada"

  return (
    <>
      <Country
        countryName={countryName}
        //for TopPlaces 
        topPlaces={TopPlacesData}
        //for TopCOllages 
        topCollages={topCollegesCard}
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
        Scholarship={PopularScholarshipData}
        // for Exam
        Exam={ExamsData}
        // for FAQ
        FAQs={CanadaFAQsData}
      />
    </>
  )
}

export default Canada
