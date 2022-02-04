import React from 'react';

import Contacts from '../Contacts';

import { Container } from './styles';

const ChatBox: React.FC = () => {
  return (
      <Container>
          <Contacts />
          <div className="chat">Chat</div>
      </Container>
  );
}

export default ChatBox;