import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

function CreateProjectForm() {
    const [ formData, setFormData ] = useState({
        goal: "",
        title: "",
        description: "",
        image:'',
        is_open: true,
        category: "Health"

    });

    const handleChange = (event) => {
        const { id, value } = event.target;    //deconstruction
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id] : value
        }));
    
    };
    
    const navigate = useNavigate();
    
   
    const handleSubmit = (event) => {
        event.preventDefault(); 
    
        // if (formData) 
       {postData().then((response) => {
    console.log(response)
    if (response.detail == 'Invalid token.'){
        alert('Please login to create campaign')
        navigate(`/login`)
    }

    else {navigate(`/project/${response.id}`)};

            })
        };
    
    };



    const postData = async ()  => {
        const token = window.localStorage.getItem('token')
        const response = await 
        fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: 'post',
            headers: {                                 
                'Content-Type': "application/json",  
                'Authorization':`token ${token}`          
            },
            body: JSON.stringify(formData)
        });
        return response.json();
    }

    return(
    <div>
       <div className="heading-container">
            <h2>Start a crowdfunding campaign</h2>
        </div> 

        <form className='form'>
         
        <div>
            <label htmlFor='category'>Choose your category</label>
                <select id='category' onChange={handleChange}>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Disaster Relief">Disaster Relief</option>
                </select>
        </div>

        <div>
            <label htmlFor='goal'>Target Amount</label>
            <input onChange={handleChange} type='number' id='goal' placeholder="Your target amount"></input>
        </div>

        <div>
            <label htmlFor='title'>Title</label>
            <input onChange={handleChange} type="text" id='title' placeholder="Your campaign title"></input>    
        </div>

        <div>
            <label htmlFor='description'>Write your story</label>
            <textarea onChange={handleChange} id='description' rows={10} cols={40} placeholder='Campaign Description'></textarea>
        </div>

        <div>
            <label htmlFor="image">Image:</label>
            <input type="url" id="image" pattern="https://*" onChange={handleChange} placeholder="Add URL of image for your campaign"/>
        </div>

        <div>
        <button className='bttn' type='submit' onClick={handleSubmit}>Create Campaign</button>
        </div>

        </form>
    </div>  
    )
};

export default CreateProjectForm;