import React, {useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "../App.css";


function AllProjectsPage() {
    const [projectList, setProjectList] = useState([]);
    
    
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

    return (
    
        <div>

         <h2> All Campaigns </h2>

        <div className="project-container">
            {projectList.map((projectData, key) => {
                // if (key < 3)
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>

    </div>
   )
}

export default AllProjectsPage;