import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Contacts from 'components/Contacts';
import Welcome from 'components/Welcome';

import ChatContainer from 'components/ChatContainer';
import { io, Socket } from 'socket.io-client';
import { user } from 'JSON/user';
import { users } from 'JSON/users';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentChat, setCurrentChat] = useState(undefined);
  // const navigate = useNavigate();
  const socket = useRef();

  // useEffect(() => {
  //   const setUser = async () => {
  //     setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')));
  //   };
  //   setUser();
  // }, []);

  useEffect(() => {
    if (user) {
      // socket.current = io(host);
      socket.current.emit('add-user', user._id);
    }
  }, [user]);

  useEffect(() => {
    const getContats = () => {
      if (user) {
        // const { data } = await getAllUsers(currentUser._id);
        setContacts(users);
      } else {
        // navigate("/setAvatar");
      }
    };
    getContats();
  }, [user]);

  const handleChatChange = chat => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={contacts}
          currentUser={user}
          changeChat={handleChatChange}
        />

        {currentChat === undefined ? (
          <Welcome currentUsername={user?.username || ''} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={user}
            socket={socket}
          />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: -webkit-fill-available;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #0e0e11;
  .container {
    height: 100vh;
    width: 100vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 20% 80%;

    @media screen and (min-width: 720px) {
      grid-template-columns: 35% 65%;
      grid-template-rows: none;
      width: 85vw;
      height: 100vh;
    }
    @media screen and (min-width: 1100px) {
      grid-template-columns: 28% 72%;
    }
  }
`;

export default App;
