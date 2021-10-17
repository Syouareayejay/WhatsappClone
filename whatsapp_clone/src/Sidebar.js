import React from 'react'
import SidebarChat from './SidebarChat';
import "./css/sidebar.css"
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
function Sidebar() {
    return (
        <div className = "sidebar">
            {/*Top sidebar */}    
            <div className = "sidebar__header">
                <Avatar/>
                <div className = "sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            {/*Search Bar*/}
            <div className = "siderbar__search">
                <div className = "sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            {/*Sidebar Chat*/}
            <div className="sidebar__Chats">
                <SidebarChat addnewchat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
