import React from 'react';
import {Route, Switch} from "react-router";
import {ProductEdit, SignIn, SignUp, Reset, ProductList} from "./templates";
import Auth from './Auth'

const Router = () => {
    return (
        <Switch>
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/signin"} component={SignIn} />
          <Route exact path={"/signin/reset"} component={Reset} />
          <Auth>
            <Route exact path={"(/)?"} component={ProductList} />
            {/* <Route exact path={"/product/edit"} component={ProductEdit} /> */}
            <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
          </Auth>
        </Switch>
    );
};

export default Router
