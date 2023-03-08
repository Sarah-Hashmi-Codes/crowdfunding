import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-hi-res-trans.png"
import "./nav.css"

function Nav() {
    // let createcampaignbutton=null;
    // const isuserloggedin= window.localStorage.getItem("token") != null;
    // if (isuserloggedin) {
    //     createcampaignbutton=(<Link className="project" to='/createproject'>Create Campaign</Link>)
    // }
    return (

        <nav className="row block center">
            <div className="logo">
            <Link to="/">
                <img src={Logo} height={40} width={150} alt="logo"></img>
            </Link> 
            </div>
            
            <div className="nav-items">
            <Link className="" to="/">Home</Link>

            <Link className="project" to='/createproject'>Create Campaign</Link>
            <Link to='/discover'>Discover</Link>
            <Link to='/login'>Log In</Link>
            <Link to="/">Log Out</Link>
            </div>
        </nav>
    )
}

export default Nav;