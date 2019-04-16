import React, {Component} from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
                123
            </div>
        );
    }
}

export default Home;