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
import NameModal from './modals/NameModal';

function LandingPage() {
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [playerName, setPlayerName] = useState('')
    const [isInvalidName, setIsInvalidName] = useState(true);
    const [mode, setMode] = useState('')
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

    const onClickConfirmNameModal = (e) => {
        if (e.target.value !== '') {
            // TODO - verify name in session
            setIsInvalidName(false);
            setIsNameModalOpen(false);
            history.push('/'+mode);
        } else {

        }
    }

    const onChangeNameModalInput = (e) => {
        if (e.target.value !== '') {
            // TODO - verify name in session
            setIsInvalidName(false);
        } else {
            setIsInvalidName(true);
        }
    }

    useEffect(() => {
        // setIsNameModalOpen(c)
    }, [])

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