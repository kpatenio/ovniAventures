import React, { useState, useEffect } from 'react';
import {
    Route,
    NavLink,
} from 'react-router-dom';
import {
    Button,
    Container,
    Menu,
} from 'semantic-ui-react';

export default function Header() {
    return (
        <Container>
            <header>
                <Menu secondary>
                    <Menu.Item position="right">
                        <Button inverted>
                            À propos
                        </Button>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button inverted>
                            EN
                        </Button>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button inverted>
                            Paramètres
                        </Button>
                    </Menu.Item>
                </Menu>
            </header>
        </Container>
    )
}