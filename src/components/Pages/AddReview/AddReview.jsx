import React from 'react'
import "./AddReview.css"
import Navibar from '../../Navbar/Navibar'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddReview = () => {
    
  const [Review, setReview] = useState('')

  const [UserName, setUserName] = useState('')
   
  const navigate = useNavigate()

  

 

 const dontReload = (event) => {
   event.preventDefault()
   
 }

  const handlleClick = () =>{
    localStorage.setItem('review', Review)
    localStorage.setItem('username',UserName)
  }
    return (
        <div>
            <Navibar />
            <hr></hr>
            <center>
            <div>
                <form className='this' onSubmit={dontReload}>
                    <label>Enter Your Username:</label><br></br>
                    <input type='input' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} className='user'></input><br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label>Add a Review:</label><br></br>
                    <input type='textarea' placeholder='Type here' onChange={(e) => setReview(e.target.value)} className='area'></input><br></br>
                    <button onClick={() =>{handlleClick(); navigate(-1)}} className='btt'>Submit</button>
                    
                </form>
            </div>
            </center>
        </div>
    )
}

export default AddReview