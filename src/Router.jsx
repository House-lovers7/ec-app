import React from 'react';
import {Route, Switch} from "react-router";
// import { Routes ,Route } from 'react-router-dom';
import {Login, Home} from "./templates";

const Router = () => {
    return (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="(/)?" component={Home} />
        </Switch>
    );
};

export default Router
