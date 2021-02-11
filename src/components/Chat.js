import React from 'react'
import { Container } from 'react-bootstrap';
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
        <Container>
            <h1>Chat section</h1>
            <PeopleList />
            <ChatWindow />
            <Rooms />
        </Container>
    )
}
