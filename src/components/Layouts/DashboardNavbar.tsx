import {
  AppBar,
  Box,
  styled,
  Theme,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import { TitleContext } from "contexts/TitleContext";
import { FC, useContext } from "react";
import NotificationsPopover from "./popovers/NotificationsPopover";
import ProfilePopover from "./popovers/ProfilePopover";
import SearchPopover from "./popovers/SearchPopover";
import ServicePopover from "./popovers/ServicePopover";

// root component interface
interface DashboardNavBarProps {
  setShowMobileSideBar: () => void;
}

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  boxShadow: "none",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backdropFilter: "blur(6px)",
  backgroundColor: "transparent",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: "5px",
  borderRadius: "10px",
  transition: "width 0.3s",
  backgroundColor: theme.palette.primary.main,
}));

// root component
const DashboardNavbar: FC<DashboardNavBarProps> = ({
  setShowMobileSideBar,
}) => {
  const { title } = useContext(TitleContext);
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  // const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  // anton hack on getting nav bar in md

  if (downSm) {
    return (
      <DashboardNavbarRoot position="sticky">
        <StyledToolBar>
          <Box sx={{ cursor: "pointer" }} onClick={setShowMobileSideBar}>
            <ToggleIcon />
            <ToggleIcon />
            <ToggleIcon />
          </Box>

          <Box flexGrow={1} textAlign="center">
            <img
              src="/static/logo/logo.svg"
              width="100%"
              height="30"
              alt="Logo"
            />
          </Box>

          {/* <LanguagePopover /> */}
          <ProfilePopover />
        </StyledToolBar>
      </DashboardNavbarRoot>
    );
  }

  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        {/* <Box>
          <ToggleIcon />
          <ToggleIcon />
          <ToggleIcon />
        </Box> */}

        {/* anton page header change */}
        {/* <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        >
          {title}
        </H2> */}

        <Box flexGrow={1} ml={1} />

        {upSm && (
          <>
            {/* <LanguagePopover /> */}
            <SearchPopover />
            <NotificationsPopover />
            <ServicePopover />
          </>
        )}
        <ProfilePopover />
      </StyledToolBar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
