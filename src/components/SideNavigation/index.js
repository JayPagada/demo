import { Box, Stack, Typography } from "@mui/material";
import "./SideNavigation.css";
import Logo from "../../assets/images/user/Logo.png";
import GearSix from "../../svg/gearSix";
import Chart from "../../svg/chart";
import News from "../../svg/news";
import Home from "../../svg/home";

const SideNavigation = () => {
  return (
    <div className="SideNavigation">
      <Box sx={{ width: "100%" }}>
        <nav>
          <img src={Logo} alt="logo" />
          <Stack marginTop={"30px"}>
            <Typography
              variant="h6"
              component="div"
              className="custom-typography"
            >
              <Home /> <span>Home </span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className="custom-typography"
            >
              <spna className="chart-icon">
                <Chart />
              </spna>
              <span>Analytics </span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className="custom-typography"
            >
              <News />
              <span>News </span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              className="custom-typography"
            >
              <GearSix /> <span>Settings </span>
            </Typography>
          </Stack>
        </nav>
      </Box>
    </div>
  );
};

export default SideNavigation;
