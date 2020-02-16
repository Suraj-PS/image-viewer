import React, {Component} from 'react';
import Login from "./screens/login/Login.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class ImageViewer extends Component {
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Route exact path="/" render={(props) => <Login {...props} baseUrl={this.baseUrl}/>}/>
                </div>
            </Router>
        )
    }
}

export default ImageViewer;