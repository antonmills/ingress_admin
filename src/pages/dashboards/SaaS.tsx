import { Box, FormControl, Grid, NativeSelect, useTheme } from "@mui/material";
import Analytics from "components/Dashboards/saas/Analytics";
import Cardv2 from "components/Dashboards/saas/Cardv2";
import Footer from "components/Dashboards/saas/Footer";
import MonthlyAttendance from "components/Dashboards/saas/MonthlyAttendance";
import RecentOrders from "components/Dashboards/saas/RecentOrders";
import TopSelling from "components/Dashboards/saas/TopSelling";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import WindowsLogoIcon from "icons/WindowsLogoIcon";
import { FC } from "react";

const SaaS: FC = () => {
  // change navbar title
  useTitle("Saas");

  const theme = useTheme();

  const cardList = [
    {
      value: 82,
      change: "+2.6%",
      changeGood: true,
      changeOverview: "vs last week",
      Icon: BucketIcon,
      title: "Todays Attendance",
      subtitle: "Unique Badges Swiped",
      color: theme.palette.primary.main,
    },
    {
      value: "08:00",
      change: "",
      changeGood: true,
      changeOverview: "",
      title: "Busiest Hour",
      subtitle: "Hour with most badge swipes",
      Icon: EarningIcon,
      color: theme.palette.primary.purple,
    },
    {
      value: 684,
      change: "2%",
      changeGood: true,
      changeOverview: "vs last week",
      Icon: WindowsLogoIcon,
      title: "Active Users",
      subtitle: "Badge Swipes",
      color: theme.palette.primary.red,
    },
    {
      value: "23",
      change: "-0.3%",
      changeGood: false,
      changeOverview: "vs last week",
      Icon: PeopleIcon,
      title: "New Users",
      subtitle: "New Badges",
      color: theme.palette.primary.yellow,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Box sx={{display: "flex", paddingBottom:"0.6rem"}}>
        {/* <Breadcrumbs sx={{ display: "flex" }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs> */}
        <FormControl sx={{width: 220, marginLeft: "auto" }}>
          <NativeSelect
            disableUnderline
            defaultValue={1}
            inputProps={{
              name: 'Buidling',
              id: 'uncontrolled-native',
            }}
          >
            <option value={1}>12 O'Connell Street, Sydney</option>
            <option value={2}>56 Pitt Street, Sydney</option>
            <option value={3}>14-18 Lee Street, Sydney</option>
          </NativeSelect>
        </FormControl>
      </Box>
      
      {/* <H1 sx={{color:"text.disabled", paddingBottom:"0.7rem" }}>Welcome back, Anton.</H1> */}
      
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <Cardv2 card={card} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} pt={4}>
        <Grid item lg={8} md={7} xs={12}>
          <MonthlyAttendance />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <Analytics />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>

        <Grid item xs={12}>
          <Footer imageLink="/static/illustration/sass-dashboard.svg" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaaS;
