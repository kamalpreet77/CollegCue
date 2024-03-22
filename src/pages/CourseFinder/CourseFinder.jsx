
import MainPageLayout from './components/MainPage/MainPageLayout';
import Login from './components/LoginPage/Login';
import { Route, Routes } from "react-router-dom";

function CourseFinder() {
  return (
    <>
      <Routes>
      <Route path="/" element={<MainPageLayout />}/>
      <Route path="/login" element={<Login />} />
      </Routes>
  
    </>
  );
}

export default CourseFinder;
