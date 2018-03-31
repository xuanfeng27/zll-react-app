/**
 * Created by zll on 2018/3/31.
 */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from './container/App'
import SliderCon from './container/SliderCon'

const AllApp = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/about">Drage</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={App} />
            <Route path="/about" component={SliderCon} />
        </div>
    </Router>
);

export default AllApp