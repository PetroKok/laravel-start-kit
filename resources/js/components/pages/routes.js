import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import AuthRoute from './Auth/Auth';


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
                <AuthRoute/>
            </Switch>
        );
    }
}