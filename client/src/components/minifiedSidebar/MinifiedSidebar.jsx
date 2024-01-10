import React, { useContext } from 'react'
import { 
    Home, 
    HomeOutlined, 
    SubscriptionsOutlined, 
    Subscriptions, 
    AccountBox, 
    AccountBoxOutlined,
    History,
    HistoryOutlined,
    WatchLater,
    WatchLaterOutlined
} from '@mui/icons-material'
import SidebarContext from '../../contexts/SidebarContext'
import './MinifiedSidebar.scss'

const MinifiedSidebar = () => {
    const minifiedSidebarItems = [
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
            icon: HistoryOutlined,
            filledIcon: History
        },
        {
            title: "Watch Later",
            icon: WatchLaterOutlined,
            filledIcon: WatchLater,
        }
    ]

  return (
    <div className='minified_sidebar'>
        {
            minifiedSidebarItems.map((sidebarItem, index) => {
                const Icon = sidebarItem.icon;
                return (
                    <div 
                        className='minified_sidebar_item' 
                        key={index}>
                            <Icon />
                            <p className='minified_sidebar_item_title'>{sidebarItem.title}</p>
                    </div>
                )   
            })
        }
    </div>
  )
}

export default MinifiedSidebar