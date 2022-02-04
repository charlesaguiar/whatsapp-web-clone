import React from 'react'

import ChatBox from './components/ChatBox';

import { AppContainer } from './App.styles';

const App: React.FC = () => {
  return (
   <AppContainer>
     <ChatBox />
   </AppContainer>
  );
}

export default App
