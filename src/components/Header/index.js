import { AppBar, Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import "./HeaderSection.css";
import GearSix from "../../svg/gearSix";
import Bell from "../../svg/bell";
import User from "../../assets/images/user/user.png";

const HeaderMain = () => {
  return (
    <div className="header-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="transparentPaper" position="static">
          <Toolbar className="toolbar">
            <Stack>
              <Typography
                variant="h6"
                component="div"
                className="custom-typography"
              >
                Hello Fazil,
              </Typography>
              <Typography
                variant="h6"
                component="div"
                className="custom-typography2"
              >
                20 Aug, 2023
              </Typography>
            </Stack>
            <Stack className="topbar">
              <Grid
                borderRight={"1px solid rgba(81, 81, 81, 1)"}
                gap={"12px"}
                paddingRight={"10px"}
                display={"flex"}
              >
                <GearSix />
                <Bell />
              </Grid>
              <img src={User} alt="logo" />
              <Stack>
                <Typography
                  variant="h6"
                  component="div"
                  className="custom-typography"
                >
                  Esther Howard
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  className="custom-typography2"
                >
                  willie.jennings@example.com
                </Typography>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderMain;
