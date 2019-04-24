import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";

export default class Auth extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(e){
        e.preventDefault();

        let formData = new FormData(e.target);

        console.log(formData);
    }

    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>

                <Route path='/login' render={() => <Login onSubmitForm={this.onSubmitForm} />}/>
                <Route path='/register' render={() => <Register onSubmitForm={this.onSubmitForm}/>}/>
            </div>
        );
    }
}