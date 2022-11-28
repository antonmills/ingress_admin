import {
  Box, Divider, Drawer,
  List, ListItemButton,
  ListItemText,
  styled,
  Theme, useMediaQuery
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollBar from "simplebar-react";
import topMenuList from "./topMenuList";

// root component interface
interface SideNavBarProps {
  showMobileSideBar: boolean;
  closeMobileSideBar: () => void;
}

// custom styled components
const MainMenu = styled(Box)(({ theme }) => ({
  left: 0,
  width: 200, //80
  height: "100%",
  position: "fixed",
  // boxShadow: theme.shadows[2],
  transition: "left 0.3s ease",
  zIndex: theme.zIndex.drawer + 11,
  //backgroundColor: theme.palette.background.paper,
  backgroundColor: '#f3f4f9',
  [theme.breakpoints.down("md")]: { left: -80 },
  "& .simplebar-track.simplebar-vertical": { width: 7 },
  "& .simplebar-scrollbar:before": {
    background: theme.palette.text.primary,
  },
}));

const StyledLogoButton = styled(ListItemButton)(({ theme }) => ({
  marginTop: "0.5rem",
  marginBottom: "1.0rem",
  marginLeft: "1rem",
  justifyContent: "left", //center
  "&:hover": { 
    backgroundColor: "transparent" 
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingBottom: "0",
  marginBottom: "0.5rem",
  marginLeft: "1rem",
  justifyContent: "left", //center
  "&:hover": { 
    backgroundColor: "transparent" 
  },
}));

const StyledListItemTextForMenu = styled(ListItemText)(({ theme }) => ({
  marginLeft: "0.7rem",
  fontWeight: "600",
  fontSize: "0.875rem",
  fontFamily: "'Public Sans', sans-serif",
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: "1.1rem",
  marginBottom: "0.4rem",
  marginLeft: "0.7rem",
  fontWeight: "400",
  fontSize: "0.775rem",
  fontFamily: "'Public Sans', sans-serif",
}));

// root component
const DashboardSideBar: FC<SideNavBarProps> = ({
  showMobileSideBar,
  closeMobileSideBar,
}) => {
  const navigate = useNavigate();

  const [active, setActive] = useState("Dashboard");
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const handleActiveMainMenu = (menuItem: any) => () => {
    setActive(menuItem.title);

    navigate(menuItem.path);
    closeMobileSideBar();
  };

  // main menus content
  const mainSideBarContent = (
    <List sx={{ height: "100%" }}>
      
      {/* logo */}
      <StyledLogoButton disableRipple>
        <img src="/static/logo/logo.svg" alt="Ingress Logo" width={31} />
      </StyledLogoButton>

      {/* menu entries */}
      <ScrollBar style={{ maxHeight: "calc(100% - 50px)" }}>
        {topMenuList.map((nav, index) => (
            <div>
              {nav.isType === "menu" &&
                // <Tooltip title={nav.title} placement="right" key={index}>
                  <StyledListItemButton
                    disableRipple
                    onClick={handleActiveMainMenu(nav)}
                  >
                    <nav.Icon
                      sx={{
                        color:
                          active === nav.title ? "primary.main" : "secondary.400",
                      }}
                    />
                    <StyledListItemTextForMenu
                      primary={`${nav.title}`}
                      sx={{
                        color:
                          active === nav.title ? "primary.main" : "secondary.400",
                      }}
                      />
                  </StyledListItemButton>
                // </Tooltip>
              }
              {nav.isType !== "menu" &&
                <StyledDivider textAlign="left">{nav.title}</StyledDivider>
              }
            </div>
        ))}
      </ScrollBar>
    </List>
  );

  // for mobile device
  if (downMd) {
    return (
      <Drawer
        anchor="left"
        open={showMobileSideBar}
        onClose={closeMobileSideBar}
        PaperProps={{ sx: { width: 230 } }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            width: "inherit",
            position: "fixed",
            overflow: "hidden",
            flexDirection: "column",
            boxShadow: (theme) => theme.shadows[1],
            //backgroundColor: (theme) => theme.palette.background.paper,
            backgroundColor: '#f3f4f9',
            "& .simplebar-track.simplebar-vertical": { width: 7 },
            "& .simplebar-scrollbar:before": {
              //background: (theme) => theme.palette.text.primary,
               background: '#f3f4f9',
            },
          }}
        >
          {mainSideBarContent}
        </Box>
      </Drawer>
    );
  }

  return <MainMenu>{mainSideBarContent}</MainMenu>;
};

export default DashboardSideBar;
