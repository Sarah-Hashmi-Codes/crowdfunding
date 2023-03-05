import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css"

function ProjectCard(props) {
    const { projectData } = props;
    // const { userData } = props;
    return (
        <div className="project-cards">
            
            <Link to={`/project/${projectData.id}`}>
            <div className='project-image'><img src={projectData.image} height={200} width={150}></img></div>
            <div className="card"><h3>{projectData.title}</h3></div>
            <div className="card-amount"><h3>${projectData.raised} raised</h3></div>
    
        
            </Link>
        
    </div>
           )
};




export default ProjectCard;