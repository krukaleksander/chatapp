import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PeopleList from './chat-components/PeopleList';
import ChatWindow from './chat-components/ChatWindow';
import Rooms from './chat-components/Rooms';


export default function Chat() {

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
