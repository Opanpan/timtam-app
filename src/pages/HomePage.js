import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Hamburger from "../components/Hamburger";
import logo from "../assets/logo_anamnesia.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  logo: {
    maxWidth: 160,
    marginTop: 10,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    setToken(localStorage.removeItem("token"));
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "transparent", color: "black" }}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <Hamburger />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          {token ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
          )}
        </Toolbar>
        <Footer />
      </AppBar>
    </div>
  );
}
