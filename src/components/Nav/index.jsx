import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-hi-res-trans.png"
import "./nav.css"

function Nav() {
    return (

        <nav className="row block center">
            <Link to="/">
                <img src={Logo} height={50} width={80} alt="logo"></img>
            </Link>
            
            <Link className="" to="/">Home</Link>
            <Link to='/createproject'>Create Campaign</Link>
            <Link to='/login'>Login</Link>
            <Link to="/">Logout</Link>
        </nav>
    )
}

export default Nav;