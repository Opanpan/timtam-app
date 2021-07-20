import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../Footer";
import Socmed from "./Socmed";
import Logo from "../logo";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: 30,
    border: "2px solid #d6d0d0",
    width: "30vw",
    padding: "50px",
    zIndex: -1,
    margin: "auto",
    marginTop: "50px",
  },
}));

export default function Register() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (!res.data.auth) {
        setLoginStatus(false);
        alert("Your Email or Password Inccorect!");
      } else {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        setLoginStatus(true);
      }
    });
  };

  const userAuthenticate = () => {
    Axios.get("http://localhost:8000/login/isauth", {
      header: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => console.log(res));
  };

  if (loginStatus) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Logo />
      </Box>
      <form className={classes.root}>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="email"
            label="Email"
            placeholder="Your Email..."
            fullWidth={true}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </Box>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="Your Password..."
            fullWidth={true}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box p={1} m={1} display="flex" justifyContent="center">
          <Button onClick={login} variant="contained" color="primary">
            Login
          </Button>
        </Box>
        <Socmed />
        {loginStatus && <Button> Check Authenticate</Button>}
      </form>
      <Footer />
    </div>
  );
}
