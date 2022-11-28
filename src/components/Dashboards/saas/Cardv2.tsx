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
  const { Icon, title, color, value } = card;

  return (
    <StyledCard>
      <Box mt={{ xs: "1rem", sm: 0 }} >
          <H5 sx={{ color:"text.disabled", paddingTop:"0px" }}>{title}</H5>
          <Box sx={{display: "flex"}}>
            <H3 sx={{ fontSize: "2rem" }}>{value}</H3>
            <Box sx={{ marginLeft: "auto"}}>
              <p>+2.6%</p>
            </Box>
          </Box>
      </Box>
    </StyledCard>
  );
};

export default Cardv2;
