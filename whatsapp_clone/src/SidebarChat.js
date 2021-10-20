import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Avatar} from '@mui/material'
import "./css/sidebar.css"
import db from './firebase';

function SidebarChat({id,name,addnewchat}) {
    const [seed,setSeed] = useState("")
    const [lastmessage, setLastmessage] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
        db.collection('rooms').doc(id).collection('message').orderBy('timestamp','desc').onSnapshot(snapshot => setLastmessage(snapshot.docs.map(doc=>doc.data())))
    }, [])
    const createChat = () => {
        let room = prompt('Add new room')
        if(room){
            db.collection('rooms').add({
                name : room
            })
        }
    }
    console.log(lastmessage)
    return (
        addnewchat ? 
        (
            <div className = "sidebar__chat" onClick = {createChat}>
                <h2>Add new chat</h2>
            </div>
        ) : 
        (
            <Link to = {`/room/${id}`} style={{ textDecoration: 'none' }}>
                <div className='sidebar__chat'>
                    <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                    <div className = 'sidebar___chatInfo'>
                        <h2> {name} </h2>
                        <p> {lastmessage[0]?.message} </p>
                    </div>
                </div>
            </Link>
        )
    )
}

export default SidebarChat
