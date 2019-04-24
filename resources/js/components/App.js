import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios'
import Routes from './pages/routes'

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // axios.post('/api/user')
        //     .then(data => console.log(data));
    }

    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
