import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import "./DashboardSection.css";
import GearSix from "../../svg/gearSix";
import Tabbar from "../Tabbar";

const Dashboard = () => {
  return (
    <div className="header-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="transparentPaper" position="static">
          <Toolbar className="toolbar" style={{ padding: 0 }}>
            <Stack>
              <Typography variant="h5" component="div">
                Dashboard
              </Typography>
              <Typography
                variant="h6"
                component="div"
                className="custom-typography2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Typography>
            </Stack>
          </Toolbar>
          <Tabbar />
        </AppBar>
      </Box>
    </div>
  );
};

export default Dashboard;
