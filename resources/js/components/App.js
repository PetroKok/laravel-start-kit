import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios'

import Home from './Home'
import Profile from './Profile'

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.post('api/user')
            .then(data => console.log(data));
    }

    render() {
        let {pathname} = window.location;
        pathname = pathname === '/' ? '' : pathname;
        console.log(pathname);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <BrowserRouter>
                                <div className="card-header"><Link to={pathname+'/home'}>home</Link></div>
                                <div className="card-header"><Link to={pathname+'/about'}>about</Link></div>
                                <div className="card-header"><Link to={pathname+'/company'}>about/company/:id</Link></div>

                                <Route path="/profile" exact component={Profile} />
                                <Route path="/profile/:id" exact component={Home} />
                            </BrowserRouter>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
