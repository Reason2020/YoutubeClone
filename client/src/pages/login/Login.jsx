import React, { useState } from 'react'
import YoutubeLogo from '../../assets/main-logo-removebg-preview.png'
import GoogleLogo from '../../assets/google-g.png';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className='login_container'>
      <img src={YoutubeLogo} alt="Youtube Logo" className='youtube_logo' />
      <form className="login_form">
        <input
          className='input_field'
          type="text"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username' 

        />
        <input
          className='input_field' 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button className='btn login'>Login</button>
        <p className="separator_text">Or</p>
        <div className="signin_with_google btn">
          <img src={GoogleLogo} alt="Google Logo" className='google_logo' />
          <p className="signin_with_google_text">Sign In With Google</p>
        </div>
      </form>
      <p className="navigate_to_signup_text">Don't have an account? <Link to='/signup'>Signup</Link></p>
    </div>
  )
}

export default Login