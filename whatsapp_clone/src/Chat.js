import React from 'react'
import {Avatar, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/chat.css'
function Chat() {
    return (
        <div className = 'chat'>
            <div className = "chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room:</h3>
                    <p>Last seen:</p>
                </div>
                <div className="header__right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton> 
                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>
                        Name
                    </span>
                    Message...
                    <span className = 'chat__time'>
                        Time
                    </span>
                </p>
                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>
                        Name
                    </span>
                    Message...
                    <span className = 'chat__time'>
                        Time
                    </span>
                </p>
            </div>
        </div>    
    )
}

export default Chat
