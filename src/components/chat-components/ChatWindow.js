import React, { useState, useRef } from 'react'
import ChatMessage from './ChatMessage';
import { messagesRef, auth } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import 'firebase/firestore';

export default function ChatWindow() {
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const dummy = useRef();
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="chat window">
                <main>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} msg={msg} />)}
                    <div ref={dummy}></div>
                </main>
                <form onSubmit={sendMessage}>
                    <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)} />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}
