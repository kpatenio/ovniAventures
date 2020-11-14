import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Header
} from 'semantic-ui-react';

function LandingPage() {
    return (
        <>
            <Container>
                <Header inverted as="h1">Ovni Aventures</Header>
                <Header inverted as="h2">Le jeu inspiré par le livre OVNI!</Header>
            <main>
                <Button inverted>
                    Jeu solo
                </Button>
                <Button inverted>
                    Jeu multijoueur
                </Button>
            </main>
            </Container>
        </>
    )
}

export default LandingPage;