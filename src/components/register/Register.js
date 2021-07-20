import React, { useState } from "react";
import Socmed from "./Socmed";
import Footer from "../Footer";
import Logo from "../logo";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useInput from "./useInput";
import Axios from "axios";

const genders = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

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
  const [gender, setGender] = useState("male");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const email = useInput("");
  const fullname = useInput("");
  const password = useInput("");
  const phone = useInput("");
  const address = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    const user = {
      email: email.value,
      password: password.value,
      full_name: fullname.value,
      gender: gender,
      address: address.value,
      phone: phone.value,
    };

    Axios.post("https://tim-tam-api.herokuapp.com/register", user)
      .then(() => console.log("User Create"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Logo />
      </Box>
      <form className={classes.root} onSubmit={submitForm}>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="fullnameaa"
            label="Full Name"
            placeholder="Your Name..."
            fullWidth={true}
            variant="outlined"
            {...fullname}
          />
        </Box>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="email"
            label="Email"
            placeholder="Your Email..."
            fullWidth={true}
            variant="outlined"
            {...email}
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
            {...password}
          />
        </Box>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="phone"
            label="Phone"
            type="number"
            placeholder="Your Phone..."
            fullWidth={true}
            variant="outlined"
            {...phone}
          />
        </Box>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="gender"
            select
            label="Select"
            value={gender}
            fullWidth={true}
            variant="outlined"
            onChange={handleGenderChange}
          >
            {genders.map((gender) => (
              <MenuItem key={gender.value} value={gender.value}>
                {gender.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box component="span" display="block" p={1} m={1}>
          <TextField
            id="address"
            label="Address"
            placeholder="Your Address..."
            fullWidth={true}
            variant="outlined"
            {...address}
          />
        </Box>
        <Box p={1} m={1} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
        <Socmed />
      </form>
      <Footer />
    </div>
  );
}
