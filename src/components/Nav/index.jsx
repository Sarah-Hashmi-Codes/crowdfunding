import React from "react";
import { Link } from "react-router-dom";
// import variable from pathfolder

function Nav() {
    return (

        <nav className="row block center">
            {/* <img src={variable} /> */}
            
            <Link className="" to="/">Home</Link>
            <Link to='/createproject'>Create Campaign</Link>
            <Link to='/login'>Login</Link>
            <Link to="/">Logout</Link>
        </nav>
    )
}

export default Nav;