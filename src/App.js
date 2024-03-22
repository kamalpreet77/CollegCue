import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MainPageLayout from "./layout/MainPageLayout";
import Coming from "./pages/ComingSoonPage/ComingSoonPage";
import Admission2023 from "./pages/Admission2023/Admission2023";
import AlreadyRegister from "./pages/Auth/pages/AlreadyRegister";
import Canada from "./pages/CanadaPage/Canada";
import DifferentPlaces from "./pages/DifferentPlaces/DifferentPlaces";
import { PlacesData } from "./pages/DifferentPlaces/Data";
import USA from "./pages/USAPage/USA";
import UK from "./pages/UKPage/UKPage";
import UAE from "./pages/UAEPage/UAEPage.jsx";
import Australia from "./pages/AustraliaPage/AustraliaPage";
import Germany from "./pages/GermanyPage/GermanyPage";
import Ireland from "./pages/IrelandPage/IrelandPage";
import Hongkong from "./pages/HongkongPage/HongkongPage";
import Singapore from "./pages/SingaporePage/SingaporePage";
import NewZealand from "./pages/NewZealandPage/NewZealandPage";
import Malaysia from "./pages/MalaysiaPage/MalaysiaPage";
import Sweden from "./pages/SwedenPage/SwedenPage";
import Netherlands from "./pages/NetherlandsPage/NetherlandsPage";
import France from "./pages/FrancePage/FrancePage";
import Italy from "./pages/ItalyPage/ItalyPage";
import ChooseCourses from "./pages/ChooseCourses/ChooseCourses";
import CollegeNews from "./pages/News/CollegeNews";
import Exam from "./pages/Exam/Exam";
import Institute from "./pages/Institute/Institute";
import Login from "./pages/Auth/pages/Login";
import Next from "./pages/Auth/pages/Next";
import Register from "./pages/Auth/pages/Register";
import RequestOtp from "./pages/Auth/pages/RequestOtp";
import Review from "./pages/Review/Review";
import Scholarship from "./pages/Scholarship/Scholarship";
import StudyAbroad from "./pages/StudyAbroad/StudyAbroad";
import TopUniversities from "./pages/TopUniversities/TopUniversities";
import WriteReview from "./pages/Writereview/WriteReview";
import CollegePredictor from "./pages/CollegePredictor/CollegePredictor";
import Hostel from "./pages/Hostel/Hostel";
import TestSeries from "./pages/TestSeries/TestSeries";
import Ranking from "./pages/Ranking/Ranking";
import CutOff from "./pages/CutOff/CutOff";
import PracticeAnswer from "./pages/PracticeAnswer/PracticeAnswer";
import PracticeQuestion from "./pages/PracticeQuestion/PracticeQuestion";
import Gallery from "./pages/Gallery/Gallery";
import JeeMainRank from "./pages/JeeMainRank/JeeRank/JeeRank";
import TrendingNews from "./pages/TrendingNews/TrendingNews";
import CourseFee from "./pages/CourseFee/CourseFee";
import Faculty from "./pages/Faculty/Faculty";
import TataScholarships from "./pages/TataScholarships/TataScholarships";
import QandA from "./pages/QandA/QandA";
import SbiLoan from "./pages/SBILoan/SbiLoan";
import EducationLoan from "./pages/EducationLoan/EducationLoan";
import Reviews from "./pages/Reviews/Reviews";
import CourseFinder from "./pages/CourseFinder/CourseFinder";
import Placement from "./pages/Placement/Placement.jsx";
import JobPortal from "./pages/JobPortal/JobPortal";
import Job from "./pages/JobPortal/Job.jsx";
import Steps from "./pages/writeReviewsSteps/Steps"
import StepTwo from "./pages/writeReviewsSteps/step2/stepOne.js"
import StepThree from "./pages/writeReviewsSteps/step3/stepOne.js"
import StepFour from "./pages/writeReviewsSteps/step4/stepOne.js"
import StepFive from "./pages/writeReviewsSteps/step5/stepOne.js"
import StepSix from "./pages/writeReviewsSteps/step6/stepOne.js"
import StepSixOne from "./pages/writeReviewsSteps/step6_1/stepOne.js"
import StepSixTwo from "./pages/writeReviewsSteps/step6_2/stepOne.js"
import Candidate from "./pages/CandidateDashboard/Candidate.jsx";
import Company from "./pages/CompanyDashboard/Company.jsx";
import LoanPage from "./pages/LoanPage/LoanPage.jsx";
import IIMBangalore from "./pages/StudyAbroad/IIMBangalore/IIMBangalore.jsx"; //college compare
import InstitutePage from "./pages/InstitutePage/InstitutePage.jsx";
import Admin from "./pages/AdminDashboard/Admin.jsx";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/coming-soon" element={<Coming />} />
          <Route path="/admission" element={<Admission2023 />} />
          <Route path="/already-register" element={<AlreadyRegister />} />
          <Route path="/choose-courses" element={<ChooseCourses />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/institutes" element={<Institute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<CollegeNews />} />
          <Route path="/next" element={<Next />} />
          <Route path="/otp" element={<RequestOtp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<Review />} />
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/study-abroad/*" element={<StudyAbroad />} />
          <Route path="/study-abroad/canada" element={<Canada />} />
          <Route path="/study-abroad/usa" element={<USA />} />
          <Route path="/study-abroad/uk" element={<UK />} />
          <Route path="/study-abroad/australia" element={<Australia />} />
          <Route path="/study-abroad/germany" element={<Germany />} />
          <Route path="/study-abroad/ireland" element={<Ireland />} />
          <Route path="/study-abroad/hong-kong" element={<Hongkong />} />
          <Route path="/study-abroad/italy" element={<Italy />} />
          <Route path="/study-abroad/singapore" element={<Singapore />} />
          <Route path="/study-abroad/new-zealand" element={<NewZealand />} />
          <Route path="/study-abroad/malaysia" element={<Malaysia />} />
          <Route path="/study-abroad/sweden" element={<Sweden />} />
          <Route path="/study-abroad/netherlands" element={<Netherlands />} />
          <Route path="/study-abroad/france" element={<France />} />
          <Route path="/study-abroad/uae" element={<UAE />} />
          <Route path="/study-abroad/iimBangalore" element={<IIMBangalore />} />
          {PlacesData.map((place) => (
            <Route
              key={place.id}
              path={`/study-abroad/canada/${place.slug}`}
              element={<DifferentPlaces place={place} />}
            />
          ))}
          <Route path="/top-universities" element={<TopUniversities />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/collegePredictor" element={<CollegePredictor />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/practice-answer" element={<PracticeAnswer />} />
          <Route path="/practice-questions" element={<PracticeQuestion />} />
          <Route path="/jee-rank" element={<JeeMainRank />} />
          <Route path="/tata-scholarships" element={<TataScholarships />} />
          <Route path="/qa" element={<QandA />} />
          <Route path="/collage-reviews" element={<Reviews />} />
          <Route path="/course-finder" element={<CourseFinder />} />
          <Route path="/institute-info/*" element={<InstitutePage />} />
          <Route path="/education-loan/*" element={<LoanPage />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/job-portal/job" element={<Job />} />
          <Route path="/step" element={<Steps />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/stepthree" element={<StepThree />} />
          <Route path="/stepfour" element={<StepFour />} />
          <Route path="/stepfive" element={<StepFive />} />
          <Route path="/stepsix" element={<StepSix />} />
          <Route path="/stepsixone" element={<StepSixOne />} />
          <Route path="/stepsixtwo" element={<StepSixTwo />} />
          {/* Dashboards => candidate, Company, Admin, Consultant */}
          <Route path="/job-portal/dashboard/candidate-dashboard/*" element={<Candidate />} />
          <Route path="/job-portal/dashboard/company-dashboard/*" element={<Company />} />
          <Route path="/admin-dashboard" element={<Admin/>} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
