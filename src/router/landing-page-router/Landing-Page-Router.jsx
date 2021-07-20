import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "../../pages/Landing-Pages-Home/Landing-Pages.jsx"
import DashboardUser from "../../pages/User/Dashboard-User";
import AddUser from "../../pages/User/Add-User";
import EditUser from "../../pages/User/Edit-User";

class Landing_Page_Router extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/dashboard-user"
                        component={DashboardUser}
                    />
                    <Route
                        exact
                        path="/dashboard-user/add-news"
                        component={AddUser}
                    />
                    <Route
                        exact
                        path="/dashboard-user/edit-news/:id"
                        component={EditUser}
                    />
                </Switch>
            </Router>
        );
    }
}

export default Landing_Page_Router