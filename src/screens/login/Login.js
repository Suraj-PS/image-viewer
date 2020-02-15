import React, { Component } from 'react';
import "./Login.css";
import Header from "../../common/header/Header.js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
        return (
            <div>
                <Header headerTitle="Image Viewer" />
                <div className="loginCardContainer">
                    <Card className="loginCard">
                        LOGIN
                        <div className="cardContent">
                            <FormControl required="true">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" placeholder="Username" />
                            </FormControl>
                            <FormControl required="true">
                                <InputLabel htmlFor="passowrd">Password</InputLabel>
                                <Input id="password" placeholder="Password" />
                            </FormControl>
                        </div>
                        <Button variant="contained" size="small" color="primary">LOGIN</Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;