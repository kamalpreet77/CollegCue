import React from "react";
import logo from "../../Assets/collegecue.png";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import ExploreForm from "./ExploreForm";
import imgs from "./components/6.png";
import topcourses from "./components/1.png";
import news from "./components/3.png";
import educationloan from "./components/9.png";
import qanda from "./components/15.png";
import testseries from "./components/16.png";
import coursefinder from "./components/17.png";
import review from "./components/4.png";
import writeareview from "./components/7.png";
import institute from "./components/12.png";
import collegepredictor from "./components/14.png";
import practicequestion from "./components/18.png";
import scholarship from "./components/10.png";
import job from "./components/11.png";
import TopNews from "./TopNews"

const drawerWidth = 240;

const navItems = [
  { label: "Top Colleges & Universities", link: "/top-universities" },
  { label: "Admission 2024", link: "/admission" },
  { label: "Exams", link: "/exam" },
  { label: "Study Abroad", link: "/study-abroad" },
];

function Navbar(props) {
  const { window } = props;

  const isMobile = useMediaQuery("(max-width:900px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [openExplore, setOpenExplore] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [openNotification , setOpenNotification] = useState(false)
  
  const handleNotificationClick =(e) =>{
    setOpenNotification(!openNotification);
    setAnchorE2(e.currentTarget);
  };
  const handleNotificationClose = () => {
    setOpenNotification(false);
    setAnchorE2(null);
  };

  const handleExploreClick = (e) => {
    setOpenExplore(!openExplore);
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenExplore(false);
    setAnchorEl(null);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  const dashboardItem = isAdmin
    ? {
        label: "Company Dashboard",
        link: "/job-portal/dashboard/company-dashboard/*",
        logo: job,
      }
    : {
        label: "Candidate Dashboard",
        link: "/job-portal/dashboard/candidate-dashboard/*",
        logo: job,
      };

  const dropdownItems = [
    { label: "Top Courses", link: "/choose-courses", logo: topcourses },
    { label: "Reviews", link: "/review", logo: review },
    { label: "News", link: "/news", logo: news },
    { label: "Write A Review", link: "/write-review", logo: writeareview },
    { label: "Education Loan", link: "/education-loan", logo: educationloan },
    { label: "Institutes", link: "/institutes", logo: institute },
    { label: "Q&A", link: "/qa", logo: qanda },
    {
      label: "College Predictor",
      link: "/collegePredictor",
      logo: collegepredictor,
    },
    { label: "Test Series", link: "/test-series", logo: testseries },
    {
      label: "Practice Questions",
      link: "/practice-questions",
      logo: practicequestion,
    },
    { label: "Course Finder", link: "/course-finder", logo: coursefinder },
    { label: "Scholarships", link: "/scholarships", logo: scholarship },
    { label: "Job Portal", link: "/job-portal", logo: job },
    dashboardItem,
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ justifyContent: "space-between" }}>
      <Divider />
      <List>
        {navItems.map((item, itemIndex) => (
          <ListItem key={itemIndex} disablePadding>
            <ListItemButton>
              <Link
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ textTransform: "none" }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {dropdownItems.map((item, itemIndex) => (
          <ListItem key={itemIndex} disablePadding>
            <ListItemButton>
              <Link
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ textTransform: "none" }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <Box component="nav" sx={{ backgroundColor: "#160048", width: "100%" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  width="80px"
                  height="80px"
                  style={{
                    marginLeft: "1rem",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      ) : (
        <Box component="nav" sx={{ backgroundColor: "#160048", width: "100%" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">
              <img
                src={logo}
                alt="CollegeCue"
                width="100px"
                height="80px"
                style={{
                  marginLeft: "1rem",
                  objectFit: "contain",
                }}
              />
            </Link>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
                marginRight: "5rem",
                marginLeft: "5rem",
              }}
            >
              {navItems.map((item, itemIndex) => (
                <Button
                  href={item.link}
                  key={itemIndex}
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
              <Button
                onClick={handleExploreClick}
                startIcon={<AppsIcon />}
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  position: "relative",
                  "& .MuiButton-endIcon": {},
                }}
              >
                Explore
              </Button>
              <Popover
                open={openExplore}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                PaperProps={{
                  sx: {
                    borderRadius: "30px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    // marginTop: "25px",
                  },
                }}
              >
                <Box
                  sx={{
                    // marginTop:"10rem",
                    bgcolor: "#D1E0ED",
                    paddingTop: "0.7rem",
                    paddingLeft: "0.7rem",
                    paddingRight: "0.7rem",
                    paddingBottom: "1rem",
                    maxHeight: "700px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "inherit",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#A9B4BF",
                      borderRadius: "6px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#BCC9D5",
                    },
                  }}
                >
                  <ExploreForm isAdmin={isAdmin} dropdownItems={dropdownItems} />
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%" }}>
                    <img
                      src={imgs}
                      alt="Collegecue logo"
                      width="155px"
                      height="155px"
                      style={{ objectFit: "contain" }}
                      sx={{ alignSelf: "center" }}
                    />
                  </Box>
                </Box>
              </Popover>
              
              
              <IconButton color="inherit" onClick={handleNotificationClick}>
                <Badge color="secondary" variant="dot">
                  <NotificationsIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
              <Popover
                open={openNotification}
                anchorEl={anchorE2}
                onClose={handleNotificationClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                PaperProps={{
                  sx: {
                    borderRadius: "30px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    // marginTop: "25px",
                    // marginRight:"2rem",
                  },
                }}
              >
                <Box
                  sx={{
                    // marginTop:"10rem",
                    maxWidth:"600px",
                    bgcolor: "#D1E0ED",
                    paddingTop: "0.7rem",
                    paddingLeft: "0.7rem",
                    paddingRight: "0.7rem",
                    paddingBottom: "1rem",
                    maxHeight: "700px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "inherit",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#A9B4BF",
                      borderRadius: "6px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#BCC9D5",
                    },
                  }}
                >
                  <TopNews isAdmin={isAdmin} dropdownItems={dropdownItems} />
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%" }}>
                    <img
                      src={imgs}
                      alt="Collegecue logo"
                      width="155px"
                      height="155px"
                      style={{ objectFit: "contain" }}
                      sx={{ alignSelf: "center" }}
                    />
                  </Box>
                </Box>
              </Popover>

              <Button
                href="/coming-soon"
                variant="contained"
                sx={{
                  backgroundColor: "#7B90FF",
                  color: "white",
                  marginLeft: "0.5rem",
                  marginRight: "2rem",
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Box>
      )}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
