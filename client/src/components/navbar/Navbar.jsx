import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/main-logo-removebg-preview.png'
import { DensityMedium, MicSharp, Notifications, NotificationsNoneOutlined, VideoCallOutlined } from '@mui/icons-material'
import ButtonedInput from './components/buttonedInput/ButtonedInput'
import DummyProfile from '../../assets/pp.jpg'
import './Navbar.scss';
import SidebarContext from '../../contexts/SidebarContext'
import NotificationsContext from '../../contexts/NotificationsContext'
import NotificationsContainer from '../notificationsContainer/NotificationsContainer'

const Navbar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    const { notificationsOpen, toggleNotifications } = useContext(NotificationsContext);

    const toggleSidebarStatus = () => {
        const sidebarStatus = sidebarOpen;
        setSidebarOpen(!sidebarOpen);
    }

  return (
    <nav className='navbar'>
        <div className="left_part">
            <button className='sidebar_toggler' onClick={(e) => toggleSidebarStatus()}>
                <DensityMedium />
            </button>
            <Link to={'/'}>
                <span className='logo_container' title='YouTube Home'>
                    <img src={mainLogo} alt="Youtube Logo" />
                </span>
            </Link>
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
            <button 
                className='notifications_container'
                onClick={toggleNotifications}>
                {
                    !notificationsOpen ? (
                        <NotificationsNoneOutlined
                            sx={{
                                fontSize: '1.7rem'
                            }} 
                        />
                    ) : (
                        <Notifications 
                            sx={{
                                fontSize: '1.7rem'
                            }}
                        />
                    )
                }
                <div className="notifications_count">
                    <p>9+</p>
                </div>
            </button>
            <img src={DummyProfile} alt="User Profile" className='user_profile' />
        </div>
    </nav>
  )
}

export default Navbar