import React from 'react'
import './css/login.css'
function Login() {
    return (
        <div className='login__wrapper'>
            <div className = 'login'>
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png' alt = 'whatsapp logo' />
                <h2>SignIn</h2>
                <button>Login with Gmail</button>
            </div>
        </div>
    )
}

export default Login
