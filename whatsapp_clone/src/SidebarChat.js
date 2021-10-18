import React, {useState,useEffect} from 'react'
import {Avatar} from '@mui/material'
import "./css/sidebar.css"

function SidebarChat({id,name,addnewchat}) {
    const [seed,setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])
    return (
        addnewchat ? 
        (
            <div className = "sidebar__chat">
                <h2>Add new chat</h2>
            </div>
        ) : 
        (
            <div className='sidebar__chat'>
                <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = 'sidebar___chatInfo'>
                    <h2> {name} </h2>
                    <p> Last Message... </p>
                </div>
            </div>
        )
    )
}

export default SidebarChat
