import React, {Component} from 'react';

export default class Login extends Component{
    render(){
        return(
            <form method="POST" onSubmit={this.props.onSubmitForm}>
                <input type="text" name="email" id="email"/><br/>
                <input type="password" name="password" id="password"/><br/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}