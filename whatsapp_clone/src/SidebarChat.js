import React from 'react'
import {Avatar} from '@mui/material'
function SidebarChat() {
    return (
        <div className='sidebar__chat'>
            <Avatar />
            <div className = 'sidebar___chatInfo'>
                <h2> React </h2>
                <p> Last Message... </p>
            </div>
        </div>
    )
}

export default SidebarChat
