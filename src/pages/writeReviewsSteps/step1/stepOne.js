import { Container } from "@mui/material";
import Stepp from "../Stepper";
import InputOne from "./components/Input1";
import InputTwo from "./components/Input2";
import InputFive from "./components/Input3";
import LevelOne from "./components/Level1";
import LevelTwo from "./components/Level3";
import Buttons from "./components/Buttons";
import CollegeSection from "./components/CollegeSection";
import SaveAndNext from "./components/SaveAndNext";
import HeadingTwo from "./components/Heading2";
import HeadingThree from "./components/Heading3";

function StepOne() {
  return (
    <Container>
      <Stepp s="0"/>
      <InputOne />
      <InputTwo />
      <InputFive />
      <HeadingTwo />
      <LevelOne />
      <LevelTwo />
      <CollegeSection placeholder="Write down Full Name of College/University" />
      <Buttons />
      <HeadingThree />
      <InputOne universityOnly />
      <CollegeSection placeholder="Why Didn't You opt this College?" />
      <SaveAndNext />
    </Container>
  );
}
export default StepOne;
