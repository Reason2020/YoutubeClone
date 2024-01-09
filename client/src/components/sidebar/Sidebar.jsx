import React, { useContext } from 'react'
import { 
  Home, 
  HomeOutlined, 
  Subscriptions, 
  SubscriptionsOutlined, 
  AccountBox, 
  AccountBoxOutlined,
  History,
  WatchLater, 
  WatchLaterOutlined,
  ThumbUp,
  ThumbUpOutlined,
  Settings,
  SettingsOutlined,
  Flag,
  FlagOutlined,
  Help,
  HelpOutline,
  Feedback,
  FeedbackOutlined 
} from '@mui/icons-material'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import SidebarContext from '../../contexts/SidebarContext'

const Sidebar = () => {
  const { sidebarOpen } = useContext(SidebarContext)

  const allMenuItems = [
    {
      title: "Home",
      icon: HomeOutlined,
      filledIcon: Home,
    },
    {
      title: "Subscriptions",
      icon: SubscriptionsOutlined,
      filledIcon: Subscriptions,
    },
    {
      title: "Your channel",
      icon: AccountBoxOutlined,
      filledIcon: AccountBox,
    },
    {
      title: "History",
      icon: History,
      filledIcon: History,
    },
    {
      title: "Watch Later",
      icon: WatchLaterOutlined,
      filledIcon: WatchLater,
    },
    {
      title: "Liked videos",
      icon: ThumbUpOutlined,
      filledIcon: ThumbUp,
    },
    {
      title: "Settings",
      icon: SettingsOutlined,
      filledIcon: Settings,
    },
    {
      title: "Report history",
      icon: FlagOutlined,
      filledIcon: Flag,
    },
    {
      title: "Help",
      icon: HelpOutline,
      filledIcon: Help,
    },
    {
      title: "Send feedback",
      icon: FeedbackOutlined,
      filledIcon: Feedback,
    }
  ]

  return (
    <>
      {
        sidebarOpen ? (
          <div className='sidebar_container'>
            {
              allMenuItems.map((menuItem, index) => {
                const Icon = menuItem.icon
                return (
                  <Link className="menu_item_card" key={index}>
                    <Icon />
                    <p>{menuItem.title}</p>
                  </Link>
                )
              })
            }
          </div>
        ) : null
      }
    </>
  )
}

export default Sidebar