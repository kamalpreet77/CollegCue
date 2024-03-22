import React from 'react'
import Hero from "./Hero"
import AcadCounsel from './AcadCounsel'
import TopPlaces from "./TopPlaces"
import TopColleges from "./TopColleges"
import Article from './Article'
import AcademicCounsellor from "./AcademicCounsellor"
import ChooseFuture from "./ChooseFuture"
import FoundColleges from './FoundColleges'
import CollegeRanking from "./CollegeRanking"
import ApplicationDates from "./ApplicationDates"
import PopularScholarship from './PopularScholarship'
import Exams from "./Exams"
import FAQ from "./FAQ"
import { Container } from '@mui/material'
import SubPageTitle from '../Headings/SubPageTitle'


const Country = ({ topPlaces, topCollages, Articles, Counsellor, CollageChoose, FC, Ranking, ApplicationDate, Scholarship, Exam, FAQs, countryName }) => {
    return (
        <>
            <Hero country={countryName}  />
            <Container maxWidth="lg" >
                <AcadCounsel country={countryName} />
                <TopPlaces
                    TopPlacesData={topPlaces} country={countryName} />
                <TopColleges
                    topCollegesCard={topCollages} />
                <Article
                    CollegeArticleData={Articles} />
                <AcademicCounsellor
                    AcadCounsellor={Counsellor} />
                <ChooseFuture
                    CollegeChooseData={CollageChoose}
                />
                <FoundColleges
                    FCCard={FC}
                />
                <CollegeRanking
                    CollegeRankingData={Ranking}
                />
                <ApplicationDates
                    ApplicationDatesData={ApplicationDate}
                />
                <PopularScholarship
                    PopularScholarshipData={Scholarship}
                />
                <Exams
                    ExamsData={Exam}
                />
                <FAQ
                    FAQ={FAQs}
                />
            </Container>
        </>
    )
}

export default Country