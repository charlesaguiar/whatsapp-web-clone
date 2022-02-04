import React from 'react';

import { IContact } from '@/mock/contacts';

import Avatar from '@/components/Avatar';

import { Container } from './styles';

interface IContactItemProps {
    contact: IContact;
    selectedContactId: number | null;
    setSelectedContactId: (id: number) => void;
}

const ContactItem: React.FC<IContactItemProps> = ({ contact, selectedContactId, setSelectedContactId }) => {
    return (
        <Container isSelected={contact.id === selectedContactId} onClick={() => setSelectedContactId(contact.id)}>
            <div className="avatar">
                <Avatar src={contact.picture} size={50} />
            </div>
            <div className="contact-info">
                <span className="sp-username">{contact.username}</span>
                <span className="sp-last-message">{contact.lastMessage?.content}</span>
            </div>
        </Container>
    );
};

export default ContactItem;