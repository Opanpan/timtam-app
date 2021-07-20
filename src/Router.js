import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Music from "./pages/Music";
import Film from "./pages/Film";
import Technology from "./pages/Technology";
import Sport from "./pages/Sport";
import LoginRegisterPage from "./pages/LoginRegisterPage";

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Music" component={Music} />
    <Route exact path="/Film" component={Film} />
    <Route exact path="/Technology" component={Technology} />
    <Route exact path="/Sport" component={Sport} />
    <Route
      exact
      path="/register"
      render={(props) => <LoginRegisterPage {...props} state={true} />}
    />
    <Route
      exact
      path="/login"
      render={(props) => <LoginRegisterPage {...props} state={false} />}
    />
  </Switch>
);

export default Utama;
