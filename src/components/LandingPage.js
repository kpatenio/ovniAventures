import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Form,
    Header,
    Input,
    Modal
} from 'semantic-ui-react';
import {
    useHistory
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import socketIOClient from 'socket.io-client';
import NameModal from './modals/NameModal';

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function LandingPage() {
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [playerName, setPlayerName] = useState();
    const [isInvalidName, setIsInvalidName] = useState(true);
    const [mode, setMode] = useState()
    const history = useHistory();

    const onClickSolo = () => {
        setIsNameModalOpen(true);
        setMode('solo');
    }

    const onClickMultiplayer = () => {
        setIsNameModalOpen(true);
        setMode('multijoueur');
    }

    const onClickCancelNameModal = () => {
        setIsNameModalOpen(false)
    }

    const onClickConfirmNameModal = () => {
        if (!isInvalidName) {
            // TODO - verify name in session
            setIsInvalidName(false);
            setIsNameModalOpen(false);

            const id = uuidv4().toString();

            socket.emit('player join', {
                player_id: id,
                player_name: playerName
            });
            localStorage.setItem(id, playerName);

            history.push('/'+mode);
        }
    }

    const onChangeNameModalInput = (e) => {
        if (e.target.value !== '') {
            // TODO - verify name in session
            setIsInvalidName(false);
            setPlayerName(e.target.value);
        } else {
            setIsInvalidName(true);
        }
    }

    return (
        <>
            <Container>
                <NameModal
                    isOpen={isNameModalOpen}
                    onClickCancel={onClickCancelNameModal}
                    onClickConfirm={onClickConfirmNameModal}
                    isInvalidName={isInvalidName}
                    onChangeInput={onChangeNameModalInput}
                />
                <Header inverted as="h1">Ovni Aventures</Header>
                <Header inverted as="h2">Le jeu inspiré par le livre OVNI!</Header>
                <main>
                    <Button onClick={onClickSolo} inverted>
                        Jeu solo
                    </Button>
                    <Button onClick={onClickMultiplayer} inverted>
                        Jeu multijoueur
                    </Button>
                </main>
            </Container>
        </>
    )
}

export default LandingPage;