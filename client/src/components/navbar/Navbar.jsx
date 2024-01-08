import React from 'react'
import mainLogo from '../../assets/main-logo.jpg'
import { DensityMedium, MicSharp, NotificationsNoneOutlined, VideoCallOutlined } from '@mui/icons-material'
import ButtonedInput from './components/buttonedInput/ButtonedInput'
import DummyProfile from '../../assets/pp.jpg'
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="left_part">
            <div className='sidebar_toggler'>
                <DensityMedium />
            </div>
            <span className='logo_container'>
                <img src={mainLogo} alt="Youtube Logo" />
            </span>
        </div>
        <div className="middle_part">
            <ButtonedInput />
            <button className='microphone'>
                <MicSharp 
                    sx={{
                        color: '#f1f1f1'
                    }}
                />
            </button>
        </div>
        <div className="right_part">
            <VideoCallOutlined
                sx={{
                    fontSize: '1.7rem'
                }} 
                />
            <div className='notifications_container'>
                <NotificationsNoneOutlined
                    sx={{
                        fontSize: '1.7rem'
                    }} 
                />
                <div className="notifications_count">
                    <p>9+</p>
                </div>
            </div>
            <img src={DummyProfile} alt="User Profile" className='user_profile' />
        </div>
    </nav>
  )
}

export default Navbar