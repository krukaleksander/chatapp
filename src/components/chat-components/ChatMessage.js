import React from 'react'
import { auth } from '../../firebase';

export default function ChatMessage(props) {
    const { text, uid, photoURL } = props.msg;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recived';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>

        </div>
    )
}
