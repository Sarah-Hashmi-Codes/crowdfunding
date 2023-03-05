import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { oneProject } from "../data";

function ProjectPage() {
    const [projectData, setProjectData ] = useState({pledges: []})
    const { id } = useParams();
    const [userList,setUserList] = useState([])

    

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserList(data)
        })
    }, []);

    const owner = userList.find((user)=>user.id==projectData.owner)
    console.log(owner)

    const editprojectLink = `/editproject/${projectData.id}`
    return (
        <div className="project-body-container">
            <div className="project-page-image" ><img src={projectData.image}/></div>
            <div className="project-title"><h3>By: {owner?.username}</h3></div>
 
            <p>{projectData.description}</p>
            {/* <h3>Created at: {projectData.date_created}</h3> */}
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}

            <h3>Pledges:</h3>
            {/* <h2>{userList.owner}</h2> */}
            <ul>
            {projectData.pledges.map((pledgeData, key) => {

                return ( 
                <>
                    
                    <li> ${pledgeData.amount} <br></br> {pledgeData.comment}
                     </li> <br></br>
                    
                </>
                );
            })}
                   
            </ul>
            <div className="button-container">
            <div>
                <Link to= './pledges'><button className='project-bttn'>Make a Donation</button></Link> {""}
            </div>

            <div>
                <Link to = {editprojectLink}><button className='project-bttn'>Edit Campaign</button></Link>
            </div>
            </div>
        </div>


    )
}

export default ProjectPage;