import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                asdasd

               <Switch>
                   <Route path="/profile/about" component={() => {return(' this is about')}}/>
                   <Route path="/profile/me" component={() => {return(' this is me')}}/>
               </Switch>

            </div>
        );
    }
}

export default Home;