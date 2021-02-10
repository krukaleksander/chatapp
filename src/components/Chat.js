import React from 'react'
import { Container } from 'react-bootstrap';
import { dbRefObject } from '../firebase';

export default function Chat() {
    dbRefObject.on('value', snap => console.log(snap.val()));
    return (
        <Container>
            <h1>Chat section</h1>
        </Container>
    )
}
