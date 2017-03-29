import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./components/Layout";
import Contact from "./components/Contact";

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ App } />
            <Route path="contact" component={ Contact }/>
            <Route path="details/:videoId" component={ App }/>
        </Route>
    </Router>
    , document.getElementById("root")
);
