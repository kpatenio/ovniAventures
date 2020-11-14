import React from 'react';
import {
    Button,
    Form,
    Input,
    Modal
} from 'semantic-ui-react';

export default function NameModal({isOpen, onClickCancel, onClickConfirm}) {
    return (
        <Modal open={isOpen}>
        <Modal.Header>Rejoindre</Modal.Header>
        <Modal.Content>
            <p>Saisissez votre nom pour rejoindre la partie.</p>
            <Form>
                <Form.Field>
                    <Input placeholder="Votre nom"/>
                </Form.Field>
                <div className="nameModalButtons">
                    <Button onClick={onClickCancel} className="cancelButton" secondary>Annuler</Button>
                    <Button onClick={onClickConfirm} className="confirmButton" primary>Confirmer</Button>
                </div>
            </Form>
        </Modal.Content>
    </Modal>
    )
}