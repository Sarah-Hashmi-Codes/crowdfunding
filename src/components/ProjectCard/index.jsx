import React from "react";
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { projectData } = props;
    // const { userData } = props;
    return (
        <div>
            {/* <div>
            <Link to={`/project/${userData.id}`}> 
            <h3>{userData.first_name}</h3>
            </Link>
             
            </div> */}
            <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image}></img>
            <h3>{projectData.title}</h3>
            <h3>{projectData.raised}</h3>
    
        
            </Link>
    
    </div>
           )
};


export default ProjectCard;