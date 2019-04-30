import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
import {AuthRoute} from "../../common/AuthRoute";
import api from "../../helpers/api_urls";
import routes from "../../helpers/routes_urls";

export default class Auth extends Component{

    constructor(props){
        super(props);
        this.state = {
            processing: false
        };
        this.onSubmitFormLogin = this.onSubmitFormLogin.bind(this);
        this.onSubmitFormRegister = this.onSubmitFormRegister.bind(this);
    }

    onSubmitFormLogin(e){
        e.preventDefault();

        this.setState({processing: true});

        let formData = new FormData(e.target);

        console.log('login');

        axios.post(api.LOGIN, formData)
            .then(res => {

                localStorage.setItem('token', res.data.token);

                localStorage.setItem('user', res.data.user);

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

                window.location = routes.PROFILE;

                this.setState({processing: false});
            })
            .catch(err => {
                this.setState({processing: false});
                alert(err)
            });
    }

    onSubmitFormRegister(e){
        e.preventDefault();

        this.setState({processing: true});

        let formData = new FormData(e.target);

        console.log('register');

        axios.post(api.REGISTER, formData)
            .then(res => {
                this.setState({processing: false});
                console.log(res)
            })
            .catch(err => alert(err));
    }

    render(){
        return this.state.processing ? (<h5>PROCESSING...</h5>) :(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>

                <AuthRoute path='/login' render={() => <Login onSubmitForm={this.onSubmitFormLogin} />}/>
                <AuthRoute path='/register' render={() => <Register onSubmitForm={this.onSubmitFormRegister}/>}/>
            </div>
        );
    }
}