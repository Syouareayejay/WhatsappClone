import React, {useState,useEffect} from 'react'
import SidebarChat from './SidebarChat';
import "./css/sidebar.css"
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
function Sidebar() {
    const [rooms,setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();
    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => {
                return {
                id: doc.id,
                data: doc.data()
            }
        }))
        })
    },[])
    return (
        <div className = "sidebar">
            {/*Top sidebar */}    
            <div className = "sidebar__header">
                <Avatar src= {user.photoURL} />
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
                    <IconButton>
                        <ExitToAppIcon onClick = {e=>firebase.auth().signOut()} />
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
                { rooms.map(room => {return <SidebarChat key = {room.id} id = {room.id} name = {room.data.name} />})}
            </div>
        </div>
    )
}

export default Sidebar
