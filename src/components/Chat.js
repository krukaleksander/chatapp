import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { pureDataBase, dbRefObject } from '../firebase';
import PeopleList from './chat-components/PeopleList';
import ChatWindow from './chat-components/ChatWindow';
import Rooms from './chat-components/Rooms';

export default function Chat() {
    // dbRefObject.on('value', snap => console.log(snap.val()));

    // function writeUserData(userId, name, email, imageUrl) {
    //     pureDataBase.ref('users/' + userId).set({
    //         username: name,
    //         email: email,
    //         profile_picture: imageUrl
    //     });
    // };

    // writeUserData('d121235', 'Olek', 'aleksander@onet.pl', 'https://onet.pl');

    return (
        <>
            <Container>
                <h1>Chat section</h1>
                <Row>
                    <Col xs={{ order: 'last', span: 12 }} md={4} lg={{ order: 'first', span: 2 }}><Rooms /></Col>
                    <Col xs={12} md={8} lg={8}><ChatWindow /></Col>
                    <Col xs={{ order: 'first' }} md={4} lg={{ order: 'last', span: 2 }}><PeopleList /></Col>
                </Row>
            </Container>
        </>
    )
}
