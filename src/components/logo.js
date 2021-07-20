import React, { useState } from "react";
import logo from "../assets/logo_anamnesia.png";
import { Redirect } from "react-router-dom";

export default function Logo() {
  const [isHomePage, setHomePage] = useState(false);
  const handleHomePage = () => {
    setHomePage(true);
  };

  if (isHomePage) {
    return <Redirect to="/" />;
  }

  return <img src={logo} onClick={handleHomePage} width="20%" alt="logo" />;
}
