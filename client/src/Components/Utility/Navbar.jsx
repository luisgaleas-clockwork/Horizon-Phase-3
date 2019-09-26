import React from 'react'
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor() {
        super()

        this.openFunction = () => {
            document.getElementById("menu").classList.add("menu__show")
            document.getElementById("mainbox").classList.add("mainbox__show")
        }

        this.closeFunction = () => {
            document.getElementById("menu").classList.remove("menu__show");
            document.getElementById("mainbox").classList.remove("mainbox__show")
        }
    }

    render() {
        return (
            <nav>
                <div id="mainbox" onClick={this.openFunction}>&#9776;</div>
                <div id="menu" className="sidemenu">
                    <Link className="closebtn" onClick={this.closeFunction}>&times;</Link>
                    <Link className="nav-link" to="/" onClick={this.closeFunction}>Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/products" onClick={this.closeFunction}>Products</Link>
                    <Link className="nav-link" to="/contact" onClick={this.closeFunction}>Contact us</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar