import React, { useState } from 'react';

import {
    BsLayersFill,
    BsChatLeftTextFill,
    BsThreeDotsVertical,
    BsFillBellSlashFill,
    BsChevronRight,
    BsSearch,
} from "react-icons/bs";

import { getContacts } from '@/mock/contacts';

import Avatar from '@/components/Avatar';
import ContactItem from './ContactItem';

import { Container } from './styles';
import colors from '@/design/colors';

const Contacts: React.FC = () => {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);

  return (
      <Container>
          <div className="header">
            <div className="avatar">
                <Avatar src="https://picsum.photos/500?random=1" size={40} />
            </div>
            <div className="actions">
                <BsLayersFill size={24} />
                <BsChatLeftTextFill size={24} />
                <BsThreeDotsVertical size={24} />
            </div>
          </div>
          <div className="notification-info">
            <div className="notification-icon">
                <BsFillBellSlashFill size={24} color={colors.black} />
            </div>
            <div className="notification-disclaim">
                <span className="main-disclaim">Get notified of new messages</span>
                <span className="sub-disclaim">
                    Turn on desktop notifications
                    <BsChevronRight size={12} />
                </span>
            </div>
          </div>
          <div className="search-chats">
            <div className="search-icon"><BsSearch size={16} /></div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search or start new chat"
                />
            </div>
          </div>
          <div className="contact-list">
            {getContacts(20).map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                selectedContactId={selectedContactId}
                setSelectedContactId={setSelectedContactId}
              />
            ))}
          </div>
      </Container>
  );
}

export default Contacts;