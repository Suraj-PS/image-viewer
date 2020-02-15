import React, { Component } from 'react';
import Header from "../../common/header/Header.js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <div>
                <Header headerTitle="Image Viewer" />
                <div className="loginCardContainer">
                    <Card className="loginCard">
                        <CardContent>
                            <h4>LOGIN</h4>
                        </CardContent>
                    </Card>
                </div>

            </div>
        )
    }
}

export default Login;