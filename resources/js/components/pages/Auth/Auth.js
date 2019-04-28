import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
import {AuthRoute} from "../../common/AuthRoute";
import urls from "../../helpers/urls";

export default class Auth extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
        this.onSubmitFormLogin = this.onSubmitFormLogin.bind(this);
        this.onSubmitFormRegister = this.onSubmitFormRegister.bind(this);
    }

    onSubmitFormLogin(e){
        e.preventDefault();

        let formData = new FormData(e.target);

        console.log('login');

        axios.post('/api/user/login', formData)
            .then(res => {

                localStorage.setItem('token', res.data.token);

                localStorage.setItem('user', res.data.user);

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

                window.location = urls.PROFILE;
            })
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

                <AuthRoute path='/login' render={() => <Login onSubmitForm={this.onSubmitFormLogin} />}/>
                <AuthRoute path='/register' render={() => <Register onSubmitForm={this.onSubmitFormRegister}/>}/>
            </div>
        );
    }
}