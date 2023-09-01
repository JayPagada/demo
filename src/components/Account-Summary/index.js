import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Account_Summary.css";
import Eye from "../../svg/eye";
import IcMarkets from "../../svg/icMarkets";
import Wallet from "../../svg/wallet";
import Line from "../../svg/line";
import TrendUp from "../../svg/trendUp";
import Circular from "../../svg/circular";
import Vector from "../../svg/Vector";
import EllipseColor from "../../svg/ellipse";
import { useState } from "react";
import PropTypes from "prop-types";
import ChartImg from "../../assets/images/user/chart.png";
import ColorLine from "../../assets/images/user/colorLine.png";
import TrendDown from "../../svg/trendDown";
import Watchicon from "../../svg/watch";
import Barbell from "../../svg/barbell";
import DailyIcon from "../../svg/dailyIcon";
import Monthly from "../../svg/monthly";

const styles = {
  tab: {
    color: "#ffffff",
    opacity: 1,
    textTransform: "capitalize",
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

const AccountSummary = () => {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="accountSummary">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="transparentPaper" position="static">
          <Toolbar className="toolbar">
            <Stack>
              <Typography
                variant="h6"
                fontSize={22}
                color={"white"}
                component="div"
              >
                <span
                  style={{ display: "flex", gap: "7px", alignItems: "center" }}
                >
                  Account Summary
                  <Eye />
                </span>
              </Typography>
              <Typography
                variant="h6"
                component="div"
                fontSize={13}
                color={"rgba(112, 112, 112, 1)"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Typography>
              <Grid
                marginTop={"15px"}
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
                    Select Account
                  </Typography>
                  <Typography variant="h5" fontSize={17} component="div">
                    #43178
                  </Typography>
                  <Typography variant="h6" fontSize={13} component="div">
                    Jenny Wilson
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Toolbar>
          <Grid container spacing={2} padding={"20px 0px"}>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack className="account_box" padding={"24px 12px"}>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={15}
                        color={"rgba(123, 127, 222, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <Wallet />
                          Account Summary
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        fontSize={22}
                        paddingTop={"20px"}
                        color={"rgba(255, 255, 255, 1)"}
                        component="div"
                      >
                        <span>$ 234,532.90</span>
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={11}
                        color={"rgba(24, 169, 87, 1)"}
                        fontWeight={500}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <TrendUp />
                          4.26%
                        </span>
                      </Typography>
                      <Line />
                      <Typography
                        variant="h6"
                        fontSize={12}
                        color={"rgba(112, 112, 112, 1)"}
                        component="div"
                      >
                        <span>Last 4 week</span>
                      </Typography>
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack className="account_box" padding={"24px 12px"}>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={15}
                        color={"rgba(123, 127, 222, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <span className="trendup_icon">
                            <TrendUp />
                          </span>
                          Total Profit
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        fontSize={22}
                        paddingTop={"20px"}
                        color={"rgba(255, 255, 255, 1)"}
                        component="div"
                      >
                        <span>$ 234,532.90</span>
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={11}
                        color={"rgba(24, 169, 87, 1)"}
                        fontWeight={500}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <TrendUp />
                          4.26%
                        </span>
                      </Typography>
                      <Line />
                      <Typography
                        variant="h6"
                        fontSize={12}
                        color={"rgba(112, 112, 112, 1)"}
                        component="div"
                      >
                        <span>Last 4 week</span>
                      </Typography>
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack className="account_box" padding={"24px 12px"}>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={15}
                        color={"rgba(123, 127, 222, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <Wallet />
                          Overall Gain
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        fontSize={22}
                        paddingTop={"20px"}
                        color={"rgba(255, 255, 255, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <TrendUp />$ 7.89%
                        </span>
                      </Typography>
                    </Grid>
                    <Stack gap="10px">
                      <Stack display={"flex"} flexDirection={"row"} gap={"8px"}>
                        <DailyIcon />
                        <Stack>
                          <Typography
                            variant="h6"
                            fontSize={15}
                            color={"rgba(24, 169, 87, 1)"}
                            fontWeight={500}
                            component="div"
                          >
                            2.43%
                          </Typography>
                          <Typography
                            component="div"
                            color={"rgba(112, 112, 112, 1)"}
                            fontSize={11}
                            variant="h6"
                          >
                            daily
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack display={"flex"} flexDirection={"row"} gap={"8px"}>
                        <Monthly />
                        <Stack>
                          <Typography
                            variant="h6"
                            fontSize={15}
                            color={"rgba(223, 22, 66, 1)"}
                            fontWeight={500}
                            component="div"
                          >
                            6.64%
                          </Typography>
                          <Typography
                            component="div"
                            color={"rgba(112, 112, 112, 1)"}
                            fontSize={11}
                            variant="h6"
                          >
                            monthly
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack className="account_box" padding={"24px 12px"}>
                    <Grid>
                      <Typography
                        variant="h6"
                        fontSize={15}
                        color={"rgba(123, 127, 222, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <span className="trendup_icon">
                            <TrendUp />
                          </span>
                          Overall DD
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        fontSize={22}
                        paddingTop={"20px"}
                        color={"rgba(255, 255, 255, 1)"}
                        component="div"
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "7px",
                            alignItems: "center",
                          }}
                        >
                          <TrendDown />$ 7.89%
                        </span>
                      </Typography>
                    </Grid>
                    <Stack gap="10px">
                      <Stack display={"flex"} flexDirection={"row"} gap={"8px"}>
                        <DailyIcon />
                        <Stack>
                          <Typography
                            variant="h6"
                            fontSize={15}
                            color={"rgba(24, 169, 87, 1)"}
                            fontWeight={500}
                            component="div"
                          >
                            3.83%
                          </Typography>
                          <Typography
                            component="div"
                            color={"rgba(112, 112, 112, 1)"}
                            fontSize={11}
                            variant="h6"
                          >
                            daily
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack display={"flex"} flexDirection={"row"} gap={"8px"}>
                        <Monthly />
                        <Stack>
                          <Typography
                            variant="h6"
                            fontSize={15}
                            color={"rgba(223, 22, 66, 1)"}
                            fontWeight={500}
                            component="div"
                          >
                            7.21%
                          </Typography>
                          <Typography
                            component="div"
                            color={"rgba(112, 112, 112, 1)"}
                            fontSize={11}
                            variant="h6"
                          >
                            monthly
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack className="growth" padding={"24px 12px"}>
                    <Grid
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          style={styles.tab}
                          label={
                            <span style={{ display: "flex", gap: "5px" }}>
                              Growth
                            </span>
                          }
                          {...a11yProps(0)}
                        />
                        <Tab
                          style={styles.tab}
                          label={
                            <span style={{ display: "flex", gap: "5px" }}>
                              Drawdown
                            </span>
                          }
                          {...a11yProps(1)}
                        />
                      </Tabs>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          className="dayselect"
                          value={age}
                          onChange={handleChangeNumber}
                          displayEmpty
                        >
                          <MenuItem value="">
                            <em>Last 30 Days</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <CustomTabPanel value={value} index={0}>
                      <Stack>
                        <img width={"100%"} src={ChartImg} alt="Chart" />
                      </Stack>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <Stack>
                        <img width={"100%"} src={ChartImg} alt="Chart" />
                      </Stack>
                    </CustomTabPanel>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Stack className="strike_rate">
                <Typography
                  variant="h6"
                  fontSize={22}
                  fontWeight={700}
                  color={"white"}
                  component="div"
                >
                  <span>Strike Rate</span>
                </Typography>
                <Box className="circularProgressbar">
                  <Circular />
                </Box>
                <Stack
                  paddingTop={"10px"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-around"}
                >
                  <Grid>
                    <Typography
                      className="custom-longs"
                      variant="h6"
                      component="div"
                    >
                      <span>50%</span>
                    </Typography>
                    <Typography variant="h6" className="short" component="div">
                      <Vector />
                      Longs Won
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h6"
                      className="custom-longs"
                      component="div"
                    >
                      <span>$1,039</span>
                    </Typography>
                    <Typography variant="h6" component="div" className="short">
                      <span>
                        <Vector />
                      </span>
                      Short Won
                    </Typography>
                  </Grid>
                </Stack>
                <Button variant="contained" className="view_history">
                  View Trade History
                </Button>
              </Stack>
              <Stack
                className="average_rr"
                margin={"15px 0px"}
                padding={"24px 12px"}
              >
                <Typography
                  variant="h6"
                  fontSize={15}
                  color={"rgba(123, 127, 222, 1)"}
                  component="div"
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                    }}
                  >
                    <Wallet />
                    Average RR
                  </span>
                </Typography>
                <Stack className="pips">
                  <Typography
                    variant="h6"
                    fontSize={22}
                    color={"rgba(255, 255, 255, 1)"}
                    component="div"
                  >
                    <span>7.89%</span>
                  </Typography>
                  <Stack gap="10px">
                    <Stack display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <TrendUp />
                      <Stack>
                        <Typography
                          variant="h6"
                          fontSize={15}
                          color={"rgba(24, 169, 87, 1)"}
                          fontWeight={500}
                          component="div"
                        >
                          10 Pips
                        </Typography>
                        <Typography
                          component="div"
                          color={"rgba(112, 112, 112, 1)"}
                          fontSize={11}
                          variant="h6"
                        >
                          Avg Pips Won
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <TrendDown />
                      <Stack>
                        <Typography
                          variant="h6"
                          fontSize={15}
                          color={"rgba(223, 22, 66, 1)"}
                          fontWeight={500}
                          component="div"
                        >
                          12 Pips
                        </Typography>
                        <Typography
                          component="div"
                          color={"rgba(112, 112, 112, 1)"}
                          fontSize={11}
                          variant="h6"
                        >
                          Avg Pips Lost
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                className="average_rr"
                margin={"15px 0px"}
                padding={"24px 12px"}
              >
                <Typography
                  variant="h6"
                  fontSize={15}
                  color={"rgba(123, 127, 222, 1)"}
                  component="div"
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                    }}
                  >
                    <Wallet />
                    Average Trade Durattions
                  </span>
                </Typography>
                <Stack className="pips">
                  <Stack>
                    <Typography
                      variant="h6"
                      fontSize={22}
                      color={"rgba(255, 255, 255, 1)"}
                      component="div"
                    >
                      <span>15 Mins</span>
                    </Typography>
                    <Button className="contained" variant="contained">
                      <Barbell />
                      <span style={{ paddingLeft: "5px" }}>Contained</span>
                    </Button>
                  </Stack>
                  <Stack gap="10px">
                    <Stack display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <span>
                        <Watchicon />
                      </span>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontSize={15}
                          fontWeight={500}
                          component="div"
                        >
                          10 Mins
                        </Typography>
                        <Typography
                          component="div"
                          color={"rgba(112, 112, 112, 1)"}
                          fontSize={11}
                          variant="h6"
                        >
                          Longest
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <span className="watchicon">
                        <Watchicon />
                      </span>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontSize={15}
                          fontWeight={500}
                          component="div"
                        >
                          12 Mins
                        </Typography>
                        <Typography
                          component="div"
                          color={"rgba(112, 112, 112, 1)"}
                          fontSize={11}
                          variant="h6"
                        >
                          Shortest
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack className="growth" padding={"24px 12px"}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  fontSize={15}
                  color={"rgba(123, 127, 222, 1)"}
                  component="div"
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                    }}
                  >
                    <Wallet />
                    Overall Trades
                    <span className="overall_trades">1022</span>
                  </span>
                </Typography>
                <Stack
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"5px"}
                  paddingTop={"15px"}
                >
                  <TrendUp />
                  <Stack>
                    <Typography
                      variant="h6"
                      fontSize={11}
                      color={"rgba(24, 169, 87, 1)"}
                      fontWeight={500}
                      component="div"
                    >
                      12 Avg
                    </Typography>
                    <Typography>Trades per day</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={9}>
                <img width={"100%"} src={ColorLine} alt="ColorLine" />
                <Grid container spacing={2} paddingTop={"20px"}>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span>
                        <EllipseColor />
                        24.9%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      EURUSD
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span className="circle_green">
                        <EllipseColor />
                        16.7%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      GBPJPY
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span className="circle_light_red">
                        <EllipseColor />
                        13.3%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      GBPUSD
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span className="circle_orang">
                        <EllipseColor />
                        8.10%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      AUDUSD
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span className="circle_yellow">
                        <EllipseColor />
                        10.2%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      AUDJPY
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      className="text_color"
                      component="div"
                    >
                      <span className="circle_sky">
                        <EllipseColor />
                        6.45%
                      </span>
                    </Typography>
                    <Typography variant="h6" className="EURUSD" component="div">
                      GBPAUD
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </AppBar>
      </Box>
    </div>
  );
};

export default AccountSummary;
