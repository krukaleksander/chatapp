import React from 'react'
import { auth } from '../../firebase';

export default function ChatMessage(props) {
    const { text, uid, photoURL } = props.msg;
    const photoShowed = photoURL === null ? 'https://cdn.pixabay.com/photo/2017/04/28/07/34/child-2267616_960_720.png' : photoURL;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recived';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoShowed} alt="" />
            <p>{text}</p>

        </div>
    )
}
