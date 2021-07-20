import React from "react";
import Login from "../components/register/Login";
import Register from "../components/register/Register";
import Axios from "axios";

export default function LoginRegisterPage({ state }) {
  Axios({
    method: "GET",
    url: "http://localhost:8000/register",
    headers: {
      "Content-Type": "appication/json",
    },
  }).then((res) => console.log(res.data.message));

  if (state) {
    return <Register />;
  }
  return <Login />;
}
