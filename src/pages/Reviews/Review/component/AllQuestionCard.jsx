import React from "react";
import QuestionCard from "./QuestionCard";
import { Box, TextField, Typography } from "@mui/material";

export default function AllQuestionCard() {
  let data = [
    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: "Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },

    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: " Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },

    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: "Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },

    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: " Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },
  ];

  return (
    <>
      <Box
        display=""
      
        sx={{
          width: "100%",
          padding: "16px",
          "@media (max-width: 800px)": {
            padding: "8px",
          },
        }}
      >
        {data.map(({ ques, ans, ansby }, index) => (
          <QuestionCard ques={ques} ans={ans} ansby={ansby} key={index} />
        ))}

        {/* ..........Comment Box.........../ */}
       
      </Box>
    </>
  );
}
