import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from '../../common/axois'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
        console.log(props);
    }

    async componentDidMount() {
        await axios().get('/api/user')
            .then(res => this.setState({user: res}))
        console.log(this.state.user.data)
    }

    render() {
        return (
            <div>
                12
            </div>
        );
    }
}

export default Home;