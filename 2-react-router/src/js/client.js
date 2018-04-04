import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "../../node_modules/bootstrap.native/dist/bootstrap-native.js";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" component={Archives}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>
    </Router>,
    app);
