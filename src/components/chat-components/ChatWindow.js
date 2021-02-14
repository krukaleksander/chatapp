import React from 'react'
import ChatMessage from './ChatMessage';
import { messagesRef } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
export default function ChatWindow() {
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    return (
        <>
            <div className="chat window">
                {messages && messages.map(msg => <ChatMessage key={msg.id} msg={msg} />)}
            </div>
        </>
    )
}
