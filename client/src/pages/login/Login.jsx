import React, { useContext, useState } from 'react'
import YoutubeLogo from '../../assets/main-logo-removebg-preview.png'
import GoogleLogo from '../../assets/google-g.png';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { loginUser } from '../../api/users';
import UserContext from '../../contexts/UserContext';

const Login = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleFormLogin = async (ev) => {
    try {
      ev.preventDefault();
      const response = await loginUser(username, password);
      console.log("Login Response: ", response);
      setUser(response.user);
      navigate('/');
    } catch(err) {
      console.log('Error Logging in: ', err);
    }
  }

  return (
    <div className='login_container'>
      <img src={YoutubeLogo} alt="Youtube Logo" className='youtube_logo' />
      <form className="login_form" onSubmit={handleFormLogin}>
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