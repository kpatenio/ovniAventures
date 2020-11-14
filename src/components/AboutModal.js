import React, { useState, useEffect } from 'react';
import {
    Modal
} from 'semantic-ui-react';

export function AboutModal() {
    return (
        <>
            <Modal
                open
            >
                <p>This is a test!</p>
            </Modal>
        </>
    )
}