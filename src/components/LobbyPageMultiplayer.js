import React, { useState, useEffect } from 'react';
import {
    Header,
    List,
    Segment
} from 'semantic-ui-react';
export default function LobbyPageMultiplayer() {
    return (
        <>
            <Header inverted as="h1">Jeu Multijoueur</Header>
            <Header inverted as="h2">Joueurs</Header>
            <Segment inverted>
            <List divided inverted relaxed>
                <List.Item>
                    <List.Content>pasunhumain</List.Content>
                </List.Item>
                <List.Item>humaintoujours</List.Item>
            </List>
            </Segment>
            <Header inverted as="h3">Ovni</Header>
            <Header inverted as="h3">Humain</Header>
            <Header inverted as="h3">Spectateurs</Header>
        </>
    )
}