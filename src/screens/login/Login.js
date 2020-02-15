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
            usernameEmptyValidation: "displayNone",
            passwordEmptyValidation: "displayNone",
            validationTextClass: "displayNone",
            accessToken: "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784"
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

        if (this.state.username === "") {
            this.setState({ usernameEmptyValidation: "displayBlock" });
        } else {
            this.setState({ usernameEmptyValidation: "displayNone" });
        }

        if (this.state.password === "") {
            this.setState({ passwordEmptyValidation: "displayBlock" });
        } else {
            this.setState({ passwordEmptyValidation: "displayNone" });
        }

        if (this.state.username !== "" & this.state.username !== correctUserName) {
            this.setState({ validationTextClass: "displayBlock" });
            return;
        }

        if (this.state.password !== "" & this.state.password !== correctPassword) {
            this.setState({ validationTextClass: "displayBlock" });
            return;
        }

        this.setState({ validationTextClass: "displayNone" });
        sessionStorage.setItem("access-token", this.state.accessToken);
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
                                <Input type="text" id="username" placeholder="Username" onChange={this.usernameChangeHandler} />
                            </FormControl>
                            <FormHelperText className={this.state.usernameEmptyValidation}>
                                <span className="displayRed">required</span>
                            </FormHelperText>
                            <FormControl required={true}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input type="password" id="password" placeholder="Password" onChange={this.passwordChangeHandler} />
                            </FormControl>
                            <FormHelperText className={this.state.passwordEmptyValidation}>
                                <span className="displayRed">required</span>
                            </FormHelperText>
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