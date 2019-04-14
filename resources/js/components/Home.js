import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props.match);
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default Home;