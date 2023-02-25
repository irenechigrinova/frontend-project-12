import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

const Chat = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('login');
  }, []);

  return <h1>Chat</h1>;
};

export default Chat;
