import React from "react";
import { withRouter } from "react-router";
import gmail from "../../assets/gmail.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import Box from "@material-ui/core/Box";

function Socmed() {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <img src={gmail} width="30%" alt="logo" />
      </Box>
      <Box>
        <img
          src={facebook}
          width="30%"
          alt="logo"
          onClick={(e) => console.log(e.target.src)}
        />
      </Box>
      <Box onClick={(e) => console.log(e.target.src)}>
        <img src={twitter} width="30%" alt="logo" />
      </Box>
    </Box>
  );
}

export default Socmed;
