import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PledgeForm() {
    const { id:projectId } = useParams();

    const [ formData, setFormData ] = useState({
        amount: "",
        comment: "",
        anonymous: false,
        project:'',
        is_open: true,
        supporter: ""

    });

    const handleChange = (event) => {
        const { id, value } = event.target;    //deconstruction
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id] : value,
            project: projectId
        }));
    
    };
    
    const navigate = useNavigate();
    
   
    // const handleSubmit = (event) => {
    //     event.preventDefault(); 
    
    
    //    {postData().then((response) => {
    // console.log(response)

    // navigate(`/project/${response.id}`);
    //         })
    //     };
    
    // };

    const handleSubmit = (event) => {
        event.preventDefault(); //Dont send anything get, want to add logic
        {postData().then((response) => {
            // console.log(response)
            alert("Your Donation was successful")
            navigate(`/project/${projectId}`);
            })
        };
    }



    const postData = async ()  => {
        const token = window.localStorage.getItem('token')
        const response = await 
        fetch(`${import.meta.env.VITE_API_URL}pledges/`, {
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
        <form>
        
        <div>
            <label htmlFor='title'></label>
        </div>

        <div>
            <label htmlFor='amount'>Donation Amount</label>
            <input onChange={handleChange} type='number' id='amount' placeholder="$$"></input>
        </div>

        <div>
            <label htmlFor='comment'>Comment</label>
            <input onChange={handleChange} type="text" id='comment' placeholder="Your comment"></input>    
        </div>
{/* 
        <div>
            <label htmlFor='description'>Write your story</label>
            <textarea onChange={handleChange} id='description' rows={10} cols={40} placeholder='Campaign Description'></textarea>
        </div> */}

        <div>
        <button type='submit' onClick={handleSubmit}>Donate</button>
        </div>

        </form>
        
    )
};

export default PledgeForm;