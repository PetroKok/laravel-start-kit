import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props.match);
    }

    render() {
        return (
            <div>
                This is the main page of profile!!
            </div>
        );
    }
}

export default Home;