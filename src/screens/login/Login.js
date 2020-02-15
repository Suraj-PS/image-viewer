import React, { Component } from 'react';
import "./Login.css";
import Header from "../../common/header/Header.js";
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            validationTextClass: "displayNone"
        }
    }

    usernameChangeHandler = event => {
        this.setState({ username: event.target.value })
    }

    passwordChangeHandler = event => {
        this.setState({ password: event.target.value })
    }

    loginClickHandler = () => {
        let correctUserName = "Suraj";
        let correctPassword = "upgrad123";

        if (this.state.username !== correctUserName) {
            this.setState({ validationTextClass: "displayValidation" });
            return;
        }

        if (this.state.password !== correctPassword) {
            this.setState({ validationTextClass: "displayValidation" });
            return;
        }

        this.setState({ validationTextClass: "displayNone" });
    }


    render() {
        return (
            <div>
                <Header headerTitle="Image Viewer" />
                <div className="loginCardContainer">
                    <Card className="loginCard">
                        LOGIN
                        <div className="cardContent">
                            <FormControl required={true}>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" placeholder="Username" onChange={this.usernameChangeHandler} />
                            </FormControl>
                            <FormControl required={true}>
                                <InputLabel htmlFor="passowrd">Password</InputLabel>
                                <Input id="password" placeholder="Password" onChange={this.passwordChangeHandler} />
                            </FormControl>
                            <FormHelperText className={this.state.validationTextClass}>
                                <span className="displayRed">Incorrect username and/or password</span>
                            </FormHelperText>
                        </div>
                        <Button variant="contained" size="small" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;