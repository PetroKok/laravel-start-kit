import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from '../../common/axois'
import {ProfileLayout} from "../../layouts/ProfileLayout";
import {SideBar} from "./SideBar";
import {Content} from "./Content";

import Settings from "./settings/Settings";
import api from "../../helpers/api_urls";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <ProfileLayout>
                <SideBar/>
                <Content>
                    <Switch>
                        <Route path="/profile/settings" component={Settings}/>
                    </Switch>
                </Content>
            </ProfileLayout>
        );
    }
}

export default Home;