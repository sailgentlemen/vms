import React, { Fragment } from "react";
import { Router, Redirect } from "@reach/router";
import Home from "./Home";
import NoFound from "./NoFound";
import routes, { Route } from "../routes";
import Dashboard from "./Dashboard";

export default function Pages() {
    const generateRoutes = (routes: Route[]) => {
        return routes.map((route) => {
            if (!route.children.length) {
                return (
                    <route.component
                        key={route.nodeId}
                        path={route.path}
                    ></route.component>
                );
            } else {
                return (
                    <route.component key={route.nodeId} path={route.path}>
                        {generateRoutes(route.children)}
                        <NoFound default />
                    </route.component>
                );
            }
        });
    };

    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <Home path="/">
                    <Redirect from="/" to="/dashboard" noThrow />
                    <Redirect
                        from="/partOne"
                        to="/partOne/statistics"
                        noThrow
                    />
                    <Redirect
                        from="/partTwo"
                        to="/partTwo/vehiclemonitor"
                        noThrow
                    />
                    <Redirect
                        from="/partThree"
                        to="/partThree/vehiclealarminfo"
                        noThrow
                    />
                    <Redirect
                        from="/partFour"
                        to="/partFour/vehiclestatisticsbusiness"
                        noThrow
                    />
                    <Redirect
                        from="/partFive"
                        to="/partFive/vehiclemaintain"
                        noThrow
                    />
                    <Redirect
                        from="/partSix"
                        to="/partSix/tolietinfo"
                        noThrow
                    />
                    <Redirect
                        from="/partSeven"
                        to="/partSeven/siminfo"
                        noThrow
                    />
                    <Redirect from="/" to="/dashboard" noThrow />
                    <Dashboard path="dashboard"></Dashboard>
                    {generateRoutes(routes)}
                    <NoFound default />
                </Home>
            </Router>
        </Fragment>
    );
}
