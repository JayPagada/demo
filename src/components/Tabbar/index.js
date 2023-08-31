import {
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import "./Tab.css";
import { useState } from "react";
import PropTypes from "prop-types";
import ChartLineUp from "../../svg/chartLineUp";
import Master_button from "../../assets/images/user/Master_Account.png";
import GearSix from "../../svg/gearSix";
import IcMarkets from "../../svg/icMarkets";
import Trophy from "../../svg/trophy";
import Chart from "../../svg/chart";

const styles = {
  tab: {
    color: "#ffffff",
    opacity: 1,
  },
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Tabbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack className="tabs">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={styles.tab}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                <Chart />
                Trade Copier
              </span>
            }
            {...a11yProps(0)}
          />
          <Tab
            style={styles.tab}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                <Trophy />
                Expert Advisor
              </span>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid gap={"32px"} display="flex" flexDirection="column">
          <span>
            <Grid container gap={"10px"} alignItems={"center"} marginBottom={3}>
              <Grid>
                <ChartLineUp />
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  fontSize={15}
                  component="div"
                  color={"#707070"}
                >
                  Strategy name
                </Typography>
                <Typography variant="h5" fontSize={20} component="div">
                  Fazil
                </Typography>
              </Grid>
            </Grid>
            <Stack className="account">
              <Grid container alignItems={"center"}>
                <Grid
                  item
                  xs={7}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                >
                  <IcMarkets />
                  <Stack>
                    <Typography
                      variant="h6"
                      fontSize={11}
                      component="div"
                      color={"#707070"}
                    >
                      Master Account
                    </Typography>
                    <Typography variant="h5" fontSize={17} component="div">
                      #43178
                    </Typography>
                    <Typography variant="h6" fontSize={13} component="div">
                      IC Markets
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={5} display={"flex"} justifyContent={"end"}>
                  <Stack padding={"0px 10px"}>
                    <Typography
                      variant="h6"
                      component="div"
                      fontSize={10}
                      color={"#707070"}
                    >
                      EA STATUS
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={15}
                      color={"#18A957"}
                      component="div"
                    >
                      Connected
                    </Typography>
                  </Stack>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Label"
                  />
                  <span className="setting_icon">
                    <GearSix />
                  </span>
                </Grid>
              </Grid>
              <Grid alignItems="center" container padding={"20px 0px"}>
                <Grid
                  alignItems="center"
                  display={"flex"}
                  item
                  xs={12}
                  lg={4}
                  md={4}
                >
                  <img src={Master_button} width={"100%"} alt="Master_button" />
                </Grid>
                <Grid xs={12} lg={6} md={10} margin="10px 0px">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className="subscriber_btn-group"
                  >
                    <Button className="subscriber_btn">3342756</Button>
                    <Button className="subscriber_btn">7426774</Button>
                    <Button className="subscriber_btn">7632525</Button>
                    <Button className="subscriber_btn">6266754</Button>
                    <Button className="subscriber_btn">+10</Button>
                  </ButtonGroup>
                </Grid>
                <Grid xl={2} lg={2} md={5} xs={12}>
                  <Select
                    className="subscriber_select"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="View Stats"
                    value="View Stats"
                  >
                    <MenuItem value="View Stats">
                      <em>View Stats</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Stack>
          </span>
          <span>
            <Grid container gap={"10px"} alignItems={"center"} marginBottom={3}>
              <Grid>
                <ChartLineUp />
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  fontSize={15}
                  component="div"
                  color={"#707070"}
                >
                  Strategy name
                </Typography>
                <Typography variant="h5" fontSize={20} component="div">
                  Fazil
                </Typography>
              </Grid>
            </Grid>
            <Stack className="account">
              <Grid container alignItems={"center"}>
                <Grid
                  item
                  xs={7}
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                >
                  <IcMarkets />
                  <Stack>
                    <Typography
                      variant="h6"
                      fontSize={11}
                      component="div"
                      color={"#707070"}
                    >
                      Master Account
                    </Typography>
                    <Typography variant="h5" fontSize={17} component="div">
                      #43178
                    </Typography>
                    <Typography variant="h6" fontSize={13} component="div">
                      IC Markets
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={5} display={"flex"} justifyContent={"end"}>
                  <Stack padding={"0px 10px"}>
                    <Typography
                      variant="h6"
                      component="div"
                      fontSize={10}
                      color={"#707070"}
                    >
                      EA STATUS
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={15}
                      color={"#18A957"}
                      component="div"
                    >
                      Connected
                    </Typography>
                  </Stack>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Label"
                  />
                  <span className="setting_icon">
                    <GearSix />
                  </span>
                </Grid>
              </Grid>
              <Grid alignItems="center" container padding={"20px 0px"}>
                <Grid
                  alignItems="center"
                  display={"flex"}
                  item
                  xs={12}
                  lg={4}
                  md={4}
                >
                  <img src={Master_button} width={"100%"} alt="Master_button" />
                </Grid>
                <Grid xs={12} lg={6} md={10} margin="10px 0px">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className="subscriber_btn-group"
                  >
                    <Button className="subscriber_btn">3342756</Button>
                    <Button className="subscriber_btn">7426774</Button>
                    <Button className="subscriber_btn">7632525</Button>
                    <Button className="subscriber_btn">6266754</Button>
                    <Button className="subscriber_btn">+10</Button>
                  </ButtonGroup>
                </Grid>
                <Grid xl={2} lg={2} md={5} xs={12}>
                  <Select
                    className="subscriber_select"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="View Stats"
                    value="View Stats"
                  >
                    <MenuItem value="View Stats">
                      <em>View Stats</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Stack>
          </span>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Stack>
  );
};

export default Tabbar;
