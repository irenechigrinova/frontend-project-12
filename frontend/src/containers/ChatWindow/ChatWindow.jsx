import { useSelector } from 'react-redux';

import { setCorrectTitle } from '../../utils/format';

const titles = ['сообщение', 'сообщения', 'сообщений'];

export const ChatWindow = () => {
  const { currentChannel, messages } = useSelector((state) => state.channels);

  const currentMessages = messages[currentChannel.id] ?? [];

  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b>{`# ${currentChannel.name}`}</b>
        </p>
        <span className="text-muted">
          {`${currentMessages.length} ${setCorrectTitle(
            currentMessages.length,
            titles,
          )}`}
        </span>
      </div>
    </div>
  );
};
