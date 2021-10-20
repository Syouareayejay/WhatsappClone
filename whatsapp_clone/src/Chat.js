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
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
function Chat() {
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [input, setInput] = useState('');
    const [messages,setMessages] = useState([]);
    const [{user},dispatch] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();
        if(input === ''){
            return alert('Empty Msg')
        }
        db.collection('rooms').doc(roomId).collection('message').add({
            name: user.displayName,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('')
    }

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            
            db.collection('rooms').doc(roomId).collection('message').orderBy('timestamp','asc')
            .onSnapshot(snapshot => {setMessages(snapshot.docs.map(doc=>doc.data()))})
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
                {messages.map(message => (
                    <p className={`chat__message ${user.displayName == message.name && "chat__sender"}`}>
                        <span className='chat__name'>
                            {message.name}
                        </span>
                        {message.message}
                        <span className = 'chat__time'>
                            {
                                new Date(message.timestamp?.seconds*1000).toLocaleTimeString()
                            }
                        </span>
                    </p>
                ))}
                
            </div>
            <div className = 'chat__footer'>
                <InsertEmoticonIcon/>
                <AttachFileIcon />
                <form onSubmit = {sendMessage} >
                    <input type = 'text' placeholder = 'Type your message' value = {input} onChange = {e => {setInput(e.target.value)}} />
                    <input type = 'submit' />
                </form>
                <MicNoneIcon/>
            </div>
        </div>    
    )
}

export default Chat
