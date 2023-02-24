import React, {useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";

const categories=["Health", "Disaster Relief", "Education"]

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

// useEffect (() => {
//     fetch(`${import.meta.env.VITE_API_URL}users`)  //get data from API
//     .then((results) => {
//         return results.json();          //transform data to be nice
//     })
//     .then((data) => {
//         setUserList(data)
//     });

// }, [])  
    return (
    <div>
        <div>
            {categories.map((category, key) => {
                return <div> {category} </div>
            })}
        </div>

        <div>
            {projectList.map((projectData, key) => {
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