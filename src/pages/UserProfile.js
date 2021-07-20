import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";

export default function Register() {
  const useStyles = makeStyles(() => ({
    root: {
      background: "white",
      borderRadius: 30,
      width: "30vw",
      padding: "50px",
      zIndex: -1,
      margin: "auto",
      marginTop: "50px",
    },
    grid: {
      flexGrow: 1,
    },
    milestone: {
      fontSize: "5vw",
      fontWeight: "lighter",
    },
    medal: {
      backgroundColor: "#FFF500",
      width: "30vw",
      height: "50vh",
      borderRadius: "50%",
      fontSize: "15vw",
      color: "white",
    },
    label: {
      fontWeight: "lighter",
      marginTop: 10,
      marginBottom: 0,
    },
  }));

  const classes = useStyles();

  const [editButton, setEditButton] = useState(true);

  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    if (disabled === true) {
      return setDisabled(false);
    }
    return setDisabled(true);
  };

  return (
    <div className={classes.grid}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
          <form className={classes.root}>
            <Box component="span" display="block" p={1} m={1}>
              <h2 className={classes.label}>Full Name</h2>
              <TextField
                id="full-name"
                label="Full Name"
                placeholder="Your Name..."
                fullWidth={true}
                disabled={disabled}
              />
            </Box>
            <Box component="span" display="block" p={1} m={1}>
              <h2 className={classes.label}>Email</h2>
              <TextField
                id="email"
                label="Email"
                placeholder="Your Email..."
                fullWidth={true}
                disabled={disabled}
              />{" "}
            </Box>
            <Box component="span" display="block" p={1} m={1}>
              <h2 className={classes.label}>Password</h2>
              <TextField
                id="password"
                type="password"
                label="Password"
                placeholder="Your Password..."
                fullWidth={true}
                disabled={disabled}
              />
            </Box>
            <Box component="span" display="block" p={1} m={1}>
              <h2 className={classes.label}>Phone</h2>
              <TextField
                id="phone"
                label="Phone"
                type="number"
                placeholder="Your Phone..."
                fullWidth={true}
                disabled={disabled}
              />
            </Box>
            <Box component="span" display="block" p={1} m={1}>
              <h2 className={classes.label}>Address</h2>
              <TextField
                id="address"
                label="Address"
                placeholder="Your Address..."
                fullWidth={true}
                disabled={disabled}
              />
            </Box>
            <div>
              {editButton ? (
                <Box p={1} m={1} display="flex" justifyContent="left">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDisabled}
                  >
                    {disabled === false ? "Submit" : "Edit"}
                  </Button>
                </Box>
              ) : (
                false
              )}
            </div>
          </form>
        </Grid>
        <Grid item xs={6}>
          <h1 className={classes.milestone} color="primary">
            YOUR MILESTONE
          </h1>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.medal}
          >
            <Grid item>1</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
