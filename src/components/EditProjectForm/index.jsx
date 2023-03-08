import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function EditProjectForm(props) {

    const { id } = props;

    const [ formData, setFormData ] = useState({
        goal: "",
        title: "",
        description: "",
        image:"",
        is_open: true,
        category: ""

    });

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setFormData(data)
        })
    }, []);


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
       {
        putData().then((response) => {
    console.log(response)
    // window.localStorage.setItem("token",response.token)

    navigate(`/project/${response.id}`);
            })
        };
    
    };


    const putData = async ()  => {
        const token = window.localStorage.getItem('token')
        const response = await 
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`, {
            method: 'put',
            headers: {                                 
                'Content-Type': "application/json",  
                'Authorization':`token ${token}`          
            },
            body: JSON.stringify(formData)
        });
        return response.json();
    }

    return(
        <form>
        
        <div>
            <label htmlFor='category'>Choose your category</label>
                <select id='category' onChange={handleChange}>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="disaster relief">Disaster Relief</option>
                </select>
        </div>

        <div>
            <label htmlFor='goal'>Target Amount</label>
            <input onChange={handleChange} type='number' id='goal' value={formData.goal}></input>
        </div>

        <div>
            <label htmlFor='title'>Title</label>
            <input onChange={handleChange} type="text" id='title' value={formData.title}></input>    
        </div>

        <div>
            <label htmlFor='description'>Write your story</label>
            <textarea onChange={handleChange} id='description' rows={10} cols={40} value={formData.description}></textarea>
        </div>

        <div>
            <label htmlFor="image">Image:</label>
            <input type="url" id="image" pattern="https://*" onChange={handleChange} value={formData.image}/>
        </div>

        <div>
        <button type='submit' onClick={handleSubmit}> Submit Edit </button>
        </div>
        <div>
        <Link to="/"><button>Cancel Edit Campaign</button></Link>
        </div>

        </form>
        
    )
};


export default EditProjectForm;