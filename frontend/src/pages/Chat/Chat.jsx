import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Channels, ChatWindow } from '../../containers';

const Chat = () => {
  const { data: userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) navigate('login');
  }, []);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <Channels />
        </div>
        <div className="col p-0 h-100">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Chat;
