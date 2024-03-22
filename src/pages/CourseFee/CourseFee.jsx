
import CourseFees from './Components/CourseFees';
import CourseSelect from './Components/CourseSelect';
import AvgFees from './Components/AvgFees';
import CourseFinderTag from './Components/CourseFinderTag';
import Ratings from './Components/Ratings';
import FacultyReview from './Components/FacultyReview';
import PopularTag from './Components/PopularTag';
import ReviewCard from './Review/Review';
import NumRating from './Review/RatingNumber';
import AllQuesAns from './ReviewComponent/AllQuesAns';
import AllCourseOffers from './ReviewComponent/AllCourseOffers';
import ApplForm from './Components/ApplForm'

function CourseFee() {
    return (
        <>
            <CourseFees />
            <CourseSelect />
            <AllCourseOffers />
            <ApplForm />
            <AllCourseOffers />
            <AvgFees />
            <CourseFinderTag />
            <Ratings />
            <FacultyReview />
            {/* <PopularTag /> */}
            {/* <ReviewCard /> */}
            <NumRating />
            <AllQuesAns />
        </>
    );

}
export default CourseFee;
