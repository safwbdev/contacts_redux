import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <nav>
            <div class="nav-wrapper">
            <div class="container">
                <Link to="/" >Contact Manager</Link>
            </div>
            </div>
          </nav>
        )
    }
}
