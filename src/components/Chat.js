import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ChatWindow from './chat-components/ChatWindow';
import '../../src/Chat.css'

export default function Chat() {

    return (
        <>
            <Container>
                <h1>Chat section</h1>
                <ChatWindow />
            </Container>
        </>
    )
}
