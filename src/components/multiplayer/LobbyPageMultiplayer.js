import React, { useState, useEffect } from 'react';
import {
    Button,
    Form,
    Header,
    Input,
    Label,
    List,
    Modal,
    Segment
} from 'semantic-ui-react';
import {
    useHistory
} from 'react-router-dom';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export default function LobbyPageMultiplayer() {

    socket.on('update client player join', (data) => {
        console.log(data);
        
    })

    const onClickHumanHandler = () => {
        console.log('selected human');
        socket.emit('assign', 'human');

    }

    const onClickAlienHandler = () => {
        console.log('selected alien');
        socket.emit('assign', 'alien');
    }

    const onClickSpectatorHandler = () => {
        console.log('selected spectator')
        socket.emit('assign', 'spectator');
    }

    socket.on('human', () => {
        console.log('received!');
    })

    return (
        <>
            <Header inverted as="h1">Jeu Multijoueur</Header>
            <Button onClick={onClickHumanHandler}>Humain</Button>
            <Button onClick={onClickAlienHandler}>Ovni</Button>
            <Button onClick={onClickSpectatorHandler}>Spectateur</Button>
            <Header inverted as="h2">Joueurs</Header>
            <Header inverted as="h3">Spectateurs</Header>
            <Segment inverted>
            <List divided inverted relaxed>
            </List>
            </Segment>
            <Header inverted as="h3">Ovni</Header>
            <Segment inverted>
            <List divided inverted relaxed>
            </List>
            </Segment>
            <Header inverted as="h3">Humain</Header>
            <Segment inverted>
            <List divided inverted relaxed>
            </List>
            </Segment>
        </>
    )
}