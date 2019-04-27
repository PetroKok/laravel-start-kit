import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
import axios from 'axios'

export default class Auth extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
        this.onSubmitFormLogin = this.onSubmitFormLogin.bind(this);
        this.onSubmitFormRegister = this.onSubmitFormRegister.bind(this);

        axios.post('http://urspace.qw/api/logout')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    onSubmitFormLogin(e){
        e.preventDefault();

        let formData = new FormData(e.target);

        console.log('login');

        axios.post('/api/user/login', formData)
            .then(res => console.log(res))
            .catch(err => alert(err));
    }

    onSubmitFormRegister(e){
        e.preventDefault();

        let formData = new FormData(e.target);

        console.log('register');

        axios.post('/api/user/register', formData)
            .then(res => console.log(res))
            .catch(err => alert(err));
    }

    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>

                <Route path='/login' render={() => <Login onSubmitForm={this.onSubmitFormLogin} />}/>
                <Route path='/register' render={() => <Register onSubmitForm={this.onSubmitFormRegister}/>}/>
            </div>
        );
    }
}