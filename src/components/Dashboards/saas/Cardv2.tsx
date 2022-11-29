import { Box, Card, styled } from "@mui/material";
import { H3, H5 } from "components/Typography";
import { FC } from "react";

// root component interface
interface SaaSCardProps {
  card: any;
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "1.0rem 1.2rem",
  // display: "flex",
  alignItems: "left",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "0.4rem",
    flexDirection: "column",
    justifyContent: "left",
    "& .MuiBox-root": {
      marginRight: 0,
      textAlign: "left",
    },
  },
}));

const Cardv2: FC<SaaSCardProps> = ({ card }) => {
  const { Icon, title, subtitle, change, changeOverview, changeGood, color, value } = card;

  return (
    <StyledCard>
      <Box mt={{ xs: "1rem", sm: 0 }} >
          <H5 sx={{ color:"text.disabled", paddingTop:"0px" }}>{title}</H5>
          <p style={{fontSize:"0.6rem", marginTop:"-0.1rem", color:"text.disabled"}}>{subtitle}</p>
          <Box sx={{display: "flex"}}>
            <H3 sx={{ fontSize: "2rem" }}>{value}</H3>
            <Box sx={{ marginLeft: "auto", marginTop:"1.1rem", fontSize: "0.7rem"}}>
                <p style={{fontSize:"1rem", display:"inline", marginBottom:"auto", color:changeGood==true?"green":"red"}}>{change}</p>
                <p style={{display:"inline", marginBottom:"auto", color:changeGood==true?"green":"red"}}> {changeOverview}</p>
            </Box>
          </Box>
      </Box>
    </StyledCard>
  );
};

export default Cardv2;
