import React, {useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import "../App.css";
import { Link } from "react-router-dom";


const categories=["Health", "Disaster Relief", "Education"];

function HomePage() {
const [projectList, setProjectList] = useState([]); 
const [userList, setUserList] = useState ([]);


useEffect (() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)  //get data from API
    .then((results) => {
        return results.json();          //transform data to be nice
    })
    .then((data) => {
        setProjectList(data)
    });
    //setProjectList(allProjects)
}, [])  //dependency array

useEffect (() => {
    fetch(`${import.meta.env.VITE_API_URL}users`)  //get data from API
    .then((results) => {
        return results.json();          //transform data to be nice
    })
    .then((data) => {
        setUserList(data)
    });

}, [])  
    return (
    
    <div>
    
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Help Someone in Need
                </h1>
         
                <h2 className="hero-subtitle">
                    Bring Change!
                </h2>
         
                <Link to="/discover"><button type="button" className="hero-button">Donate Now &raquo;</button></Link> {""}

                <Link to="/createproject"><button type="button" className="hero-button">Create campaign &raquo;</button></Link>

            </div>
    
        </div>

        {/* <div>
            {categories.map((category, key) => {
                return <div> {category} </div>
            })}
        </div> */}

        <h2> All Campaigns </h2>

        <div className="project-container">
            {projectList.map((projectData, key) => {
                // if (key < 3)
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>

        {/* <div>
            {userList.map((userData, key) => {
                return <ProjectCard key={key} userData={userData} />;
            })}
        </div> */}

    </div>
   )
}

export default HomePage;