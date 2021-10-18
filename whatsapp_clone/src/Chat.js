import React, {useState, useEffect} from 'react'
import {Avatar, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';
import './css/chat.css'
import {useParams} from 'react-router-dom'
import db from './firebase';
function Chat() {
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })
        }
    }, [roomId])
    return (
        <div className = 'chat'>
            <div className = "chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                    Message Reply...
                    <span className = 'chat__time'>
                        Time
                    </span>
                </p>
            </div>
            <div className = 'chat__footer'>
                <InsertEmoticonIcon/>
                <AttachFileIcon />
                <form>
                    <input type = 'text' placeholder = 'Type your message'/>
                    <input type = 'submit' />
                </form>
                <MicNoneIcon/>
            </div>
        </div>    
    )
}

export default Chat
