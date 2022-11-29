import { Box, Grid, useTheme } from "@mui/material";
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
      value: "8:00",
      change: "8:00",
      changeGood: true,
      changeOverview: "last week",
      title: "Busiest Hour",
      subtitle: "Badge Swipes per Hour",
      Icon: EarningIcon,
      color: theme.palette.primary.purple,
    },
    {
      value: 684,
      change: "-2%",
      changeGood: false,
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
