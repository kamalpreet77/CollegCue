import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";

export default function DropDown() {
  const [Stream, setStream] = React.useState("");
  const [State, setState] = React.useState("");
  const [Course, setCourse] = React.useState("");
  const [programType, setprogramType] = React.useState("");
  const [typeOfCollege, settypeOfCollege] = React.useState("");
  const [exam, setExam] = React.useState("");
  const [avgFee, setAvgFee] = React.useState("");
  const [courseType, setCourseType] = React.useState("");
  const [agency, setAgency] = React.useState("");
  const [affiliation, setAffiliation] = React.useState("");

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleProgramTypeChange = (event) => {
    setprogramType(event.target.value);
  };

  const handleTypeOfCollegeChange = (event) => {
    settypeOfCollege(event.target.value);
  };

  const handleExamChange = (event) => {
    setExam(event.target.value);
  };

  const handleAvgFeeChange = (event) => {
    setAvgFee(event.target.value);
  };

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };

  const handleAgencyChange = (event) => {
    setAgency(event.target.value);
  };

  const handleAffiliationChange = (event) => {
    setAffiliation(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ color: "#210366",paddingTop:"2rem" }}>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="Stream"
          id="Stream"
          value={Stream}
          onChange={handleStreamChange}
          displayEmpty
          placeholder="Stream"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Stream
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="State"
          id="State"
          value={State}
          onChange={handleStateChange}
          displayEmpty
          placeholder="State"          
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            State
          </MenuItem>
          <MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
          <MenuItem value={"Assam"}>Assam</MenuItem>
          <MenuItem value={"Bihar"}>Bihar</MenuItem>
          <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
          <MenuItem value={"Goa"}>Goa</MenuItem>
          <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
          <MenuItem value={"Haryana"}>Haryana</MenuItem>
          <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
          <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
          <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
          <MenuItem value={"Kerala"}>Kerala</MenuItem>
          <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
          <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
          <MenuItem value={"Uttrakhand"}>Uttrakhand</MenuItem>
          <MenuItem value={"West Bengal"}>West Bengal</MenuItem>
          <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
          <MenuItem value={"Telangana"}>Telangana</MenuItem>
          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
          <MenuItem value={"Punjab"}>Punjab</MenuItem>
          <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
          <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
          <MenuItem value={"Odisha"}>Odisha</MenuItem>
          <MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="Course"
          id="Course"
          value={Course}
          onChange={handleCourseChange}
          displayEmpty
          placeholder="Course"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Course
          </MenuItem>
          <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
          <MenuItem value={"B.Arch"}>B.Arch</MenuItem>
          <MenuItem value={"B.Sc"}>B.Sc</MenuItem>
          <MenuItem value={"B.Com"}>B.Com</MenuItem>
          <MenuItem value={"BBA"}>BBA</MenuItem>
          <MenuItem value={"BCA"}>BCA</MenuItem>
          <MenuItem value={"BDS"}>BDS</MenuItem>
          <MenuItem value={"MBBS"}>MBBS</MenuItem>
          <MenuItem value={"B.Pharm"}>B.Pharm</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="programType"
          id="programType"
          value={programType}
          onChange={handleProgramTypeChange}
          displayEmpty
          placeholder="Program Type"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Program Type
          </MenuItem>
          <MenuItem value={"Full Time"}>Full Time</MenuItem>
          <MenuItem value={"Part Time"}>Part Time</MenuItem>
          <MenuItem value={"Distance"}>Distance</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="typeOfCollege"
          id="typeOfCollege"
          value={typeOfCollege}
          onChange={handleTypeOfCollegeChange}
          displayEmpty
          placeholder="Type of College"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Type of College
          </MenuItem>
          <MenuItem value={"Private"}>Private</MenuItem>
          <MenuItem value={"Government"}>Government</MenuItem>
          <MenuItem value={"Deemed"}>Deemed</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="exam"
          id="exam"
          value={exam}
          onChange={handleExamChange}
          displayEmpty
          placeholder="Exam"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Exam
          </MenuItem>
          <MenuItem value={"JEE Main"}>JEE Main</MenuItem>
          <MenuItem value={"JEE Advanced"}>JEE Advanced</MenuItem>
          <MenuItem value={"BITSAT"}>BITSAT</MenuItem>
          <MenuItem value={"VITEEE"}></MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="agency"
          id="agency"
          value={agency}
          onChange={handleAgencyChange}
          displayEmpty
          placeholder="Agency"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Agency
          </MenuItem>
          <MenuItem value={"NTA"}>NTA</MenuItem>
          <MenuItem value={"IIT"}>IIT</MenuItem>
          <MenuItem value={"BITS"}>BITS</MenuItem>
          <MenuItem value={"VIT"}>VIT</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="fees"
          id="fees"
          value={avgFee}
          onChange={handleAvgFeeChange}
          displayEmpty
          placeholder="Avg. Fees"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Avg. Fees
          </MenuItem>
          <MenuItem value={"Less than 1 Lakh"}>Less than 1 Lakh</MenuItem>
          <MenuItem value={"2 Lakh to 5 Lakh"}>2 Lakh to 5 Lakh</MenuItem>
          <MenuItem value={"5 Lakh to 10 Lakh"}>5 Lakh to 10 Lakh</MenuItem>
          <MenuItem value={"10 Lakh to 20 Lakh"}>10 Lakh to 20 Lakh</MenuItem>
          <MenuItem value={"More than 20 Lakh"}>More than 20 Lakh</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: "5rem",
          border: 0,
          textTransform: "none",
          // make bar on bottom disappear
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover": {
            borderBottom: "none",
          },
          "& .MuiInput-underline.Mui-disabled:before": {
            borderBottom: "none",
          },
        }}
      >
        <Select
          labelId="CourseType"
          id="CourseType"
          value={courseType}
          onChange={handleCourseTypeChange}
          displayEmpty
          placeholder="Course Type"
          sx={{
            color: "#210366", // Set font color to #210366
          }}
        >
          <MenuItem disabled value="">
            Course Type
          </MenuItem>
          <MenuItem value={"Engineering"}>Engineering</MenuItem>
          <MenuItem value={"Medical"}>Medical</MenuItem>
          <MenuItem value={"Management"}>Management</MenuItem>
          <MenuItem value={"Law"}>Law</MenuItem>
          <MenuItem value={"Commerce"}>Commerce</MenuItem>
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"Arts"}>Arts</MenuItem>
          <MenuItem value={"Architecture"}>Architecture</MenuItem>
          <MenuItem value={"Design"}>Design</MenuItem>
          <MenuItem value={"Computer Application"}>
            Computer Application
          </MenuItem>
          <MenuItem value={"Pharmacy"}>Pharmacy</MenuItem>
          <MenuItem value={"Dental"}>Dental</MenuItem>
          <MenuItem value={"Hotel Management"}>Hotel Management</MenuItem>
          <MenuItem value={"Mass Communication"}>Mass Communication</MenuItem>
          <MenuItem value={"Medical"}>Medical</MenuItem>
          <MenuItem value={"Paramedical"}>Paramedical</MenuItem>
          <MenuItem value={"Nursing"}>Nursing</MenuItem>
          <MenuItem value={"Vocational Courses"}>Vocational Courses</MenuItem>
          <MenuItem value={"Animation"}>Animation</MenuItem>
          <MenuItem value={"Aviation"}>Aviation</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
