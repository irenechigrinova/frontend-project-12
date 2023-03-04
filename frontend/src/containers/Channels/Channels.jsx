import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels } from '../../store/entities/channels/channels.thunk';
import { changeCurrentChannel } from '../../store/entities/channels/channels.slice';

import { Channel } from '../../components';

export const Channels = () => {
  const { list, currentChannel } = useSelector((state) => state.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannels());
  }, []);

  const handleSelectChannel = (channel) => {
    dispatch(changeCurrentChannel(channel));
  };

  return (
    <>
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <Button
          type="button"
          variant="group-vertical"
          className="p-0 text-primary"
          onClick={() => {}}
        >
          <PlusSquare size={20} />
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <ul
        id="channels-box"
        className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
      >
        {list.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            currentChannel={currentChannel.id}
            onSelect={handleSelectChannel}
            onRemove={() => {}}
            onRename={() => {}}
          />
        ))}
      </ul>
    </>
  );
};
