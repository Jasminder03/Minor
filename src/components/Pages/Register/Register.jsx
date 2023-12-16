import React from 'react'
import "./Register.css"
import { vending } from '../../../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

  const [Name, setName] = useState('')

  const handleClick = () =>{
    localStorage.setItem('name', Name)
  }

  return (
    <div className='kk'>
        <div className='body1'>
        <video  src={vending}autoPlay loop muted plays-inline class="background">
    </video>
    <div class="wrapper">
      <form action="">
            <h1>Register</h1>
            <div class="input-box">
                <input type="text" placeholder="Name" required
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Email" required/>
          </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required/>
            </div>
            <div class="input-box">
              <input type="password" placeholder="Confirm Password" required/>
          </div>

            
          <Link to="/"><button type= "submit" class="buttoon" onClick={()=> handleClick()}> Sign up </button></Link> 

        </form>
        </div>
    </div>
    </div>
  )
}

export default Register