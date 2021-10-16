import React from 'react'
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Sidebar() {
    return (
        <div className = "sidebar">
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
        </div>
    )
}

export default Sidebar
