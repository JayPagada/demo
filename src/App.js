import { Grid } from "@mui/material";
import "./App.css";
import HeaderMain from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <Grid container spacing={2} padding={"50px 30px"}>
        <Grid item xs={2}>
          <SideNavigation />
        </Grid>
        <Grid item xs={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
