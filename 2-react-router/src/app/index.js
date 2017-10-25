import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout   from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";


class App extends React.Component {
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Featured}/>
                    <Route path="archives(/:article)" name="archives" component={Archives}/>
                    <Route path="settings" name="settings" component={Settings}/>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, window.document.getElementById('app'));