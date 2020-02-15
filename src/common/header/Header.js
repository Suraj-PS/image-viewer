import React from 'react';
import "./Header.css";

const Header = function(props) {
    return (
        <div className = "header">
            {props.headerTitle}
        </div>
    )
}

export default Header;