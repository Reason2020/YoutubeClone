import React, { useContext, useState } from 'react'
import GoogleLogo from '../../assets/google-g.png'
import YoutubeLogo from '../../assets/main-logo-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss';
import { registerUser } from '../../api/users'; 
import UserContext from '../../contexts/UserContext';

const Signup = () => {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleUserRegistration = async (ev) => {
    ev.preventDefault();
    const response = await registerUser(username, email, password);
    if (response.success) {
      console.log('Register response: ', response);
      setUser(response.user)
      navigate('/');
    }
  }

  return (
    <div className='signup_container'>
      <img src={YoutubeLogo} alt="Youtube Logo" className='youtube_logo' />
      <form className='signup_form' onSubmit={handleUserRegistration}>
        <input 
          type="text" 
          className="input_field" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input 
          type="text" 
          className="input_field" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <input 
          type="password" 
          className="input_field" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <input 
          type="password" 
          className="input_field" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
        />
        <button className='btn signup'>Signup</button>
        <p className="separator_text">Or</p>
        <div className="btn signup_with_google">
          <img src={GoogleLogo} alt="Google Logo" className='google_logo' />
          <p className="signup_with_google_text">Signup with Google</p>
        </div>
      </form>
      <p className="navigate_to_login_text">Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Signup