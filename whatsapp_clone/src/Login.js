import React from 'react'
import './css/login.css'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider'
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type:'SET_USER',
                user:result.user
            })
        }).catch(error => alert(error));
    }
    return (
        <div className='login__wrapper'>
            <div className = 'login'>
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png' alt = 'whatsapp logo' />
                <h2>SignIn</h2>
                <button onClick = {signIn}>Login with Google</button>
            </div>
        </div>
    )
}

export default Login
