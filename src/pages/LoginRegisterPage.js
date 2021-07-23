import React from "react";
import Login from "../components/register/Login";
import Register from "../components/register/Register";

export default function LoginRegisterPage({ state }) {
  if (state) {
    return <Register />;
  }
  return <Login />;
}
