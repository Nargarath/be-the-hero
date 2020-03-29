import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from './pages/Profile'
import IncidentRegister from "./pages/IncidentRegister";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/register-incident" component={IncidentRegister} />
            </Switch>
        </BrowserRouter>
    );
};
