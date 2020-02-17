import React, {Component} from 'react';
import Login from "./screens/login/Login.js";
import Home from "./screens/home/Home.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class ImageViewer extends Component {
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <Login {...props} baseUrl={this.baseUrl}/>}/>
                    <Route path="/home" render={(props) => <Home {...props} baseUrl={this.baseUrl}/>}/>
                </div>
            </Router>
        )
    }
}

export default ImageViewer;