import React, {Component} from 'react';

export default class Register extends Component{
    render(){
        return(
            <form method="POST" onSubmit={this.props.onSubmitForm}>
                <input type="text" name="name" id="name"/><br/>
                <input type="text" name="email" id="email"/><br/>
                <input type="password" name="password" id="password"/><br/>
                <input type="password" name="password_confirm" id="password_confirm"/><br/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}