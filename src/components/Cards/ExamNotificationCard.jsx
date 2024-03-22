import * as React from "react";
import { Avatar, Box, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function ExamNotifications(props) {
  return (
    <div  style={{ backgroundColor: "" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>

      <Box
        sx={{
          width: "300px",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          borderBottom: "1.5px solid rgba(123, 144, 255, 0.4)",
          marginLeft: "16px",
          marginBottom: "12px",
        }}
      >
        {/* <Avatar src={props.img} alt='image' sx={{ width: "80px", height: "80px",paddingLeft:"16px", paddingTop:"27px" }}/>  */}
        <Avatar
          src={props.img}
          sx={{
            position: "absolute",
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            marginTop: "8px",
            marginBottom: "13px",
          }}
        ></Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            // variant="h5"
            sx={{
              width: "230px",
              height: "auto",
              // paddingLeft: "40px",
              marginLeft: "74px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "18px",
              marginTop: "10px",
            }}
          >
            {props.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <CalendarTodayOutlinedIcon
              color="primary"
              fontSize="small"
              sx={{
                // position: "absolute",
                fontSize: 15,
                marginLeft: "75.25px",
                marginTop: "5.92px",
                // marginRight: "8.33%",
                // marginTop: "4.17%",
                // marginBottom: "4.17%",
              }}
            />
            <Typography
              // variant="h5"
              sx={{
                width: "70px",
                height: "16px",
                // paddingLeft: "40px",
                marginTop: "5.29px",
                marginLeft: "5.25px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "10px",
                color: "#7B90FF",
                fontWeight: "400",
                lineHeight: "16px",
                marginBottom: "15.71",
              }}
            >
              {props.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
