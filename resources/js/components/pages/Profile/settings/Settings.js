import React, {Component} from 'react'
import api_urls from "../../../helpers/api_urls";
import axios from '../../../common/axois'

class Settings extends Component{

    constructor(props){
        super(props);
        this.state = {
          user : []
        };
    }

    componentDidMount() {
        axios().post(api_urls.USER)
            .then(res => {
                this.setState({user: res.data.user})
            })
            .catch(err => {
                alert(err);
                console.log(err)
            })
    }

    render(){
        return(
            <div>
                12345
            </div>
        );
    };
}

export default Settings;