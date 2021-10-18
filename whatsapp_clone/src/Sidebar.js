import React, {useState,useEffect} from 'react'
import SidebarChat from './SidebarChat';
import "./css/sidebar.css"
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import db from './firebase';
function Sidebar() {
    const [rooms,setRooms] = useState([]);
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
                { rooms.map(room => {return <SidebarChat key = {room.id} id = {room.id} name = {room.data.name} />})}
            </div>
        </div>
    )
}

export default Sidebar
