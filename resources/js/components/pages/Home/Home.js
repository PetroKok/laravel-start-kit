import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        localStorage.removeItem('token');

    }

    render() {
        return (
            <div>
                This is the main page of HOME
            </div>
        );
    }
}

export default Home;