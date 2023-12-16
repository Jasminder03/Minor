import React from 'react'
import { spiderman } from '../../../assets'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navibar from '../../Navbar/Navibar'
import { useRef } from 'react'


const Login = () => {

    const [Name, setName] = useState("")

    const handleClick = () => {
        localStorage.setItem("name",Name)
    }

    return (
        <div>
            
            <div className='kk'>
                <div className='body1'>
                    <div>
                        <video autoPlay loop muted className="background">
                            <source src={spiderman} type='video/mp4' />

                        </video>
                        <div className="wrapper">
                            <form action="">
                                <h1>Login</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Username" required
                                    onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" required />
                                </div>

                                <div className="remember-forget">
                                    <label><input type="checkbox" /> Remember Me</label>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <Link to='/'> <button type="submit" className="buttoon" onClick={()=> handleClick()}>   Login   </button> </Link>

                                <div className="register-link">
                                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login