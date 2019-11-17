import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo center" >Contact Manager</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
