import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className="container py-0 my-0">
                    <Link className="navbar-brand" to="/">Fitts' Law Demo</Link>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/about">About</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
