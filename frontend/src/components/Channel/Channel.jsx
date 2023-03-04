import { Button } from 'react-bootstrap';
import { ChannelDropdown } from '../ChannelDropdown/ChannelDropdown';

export const Channel = ({
  channel,
  currentChannel,
  onSelect,
  onRemove,
  onRename,
}) => {
  const variant = channel.id === currentChannel ? 'secondary' : null;
  return (
    <li key={channel.id} className="nav-item w-100">
      {channel.removable ? (
        <ChannelDropdown
          id={channel.id}
          name={channel.name}
          variant={variant}
          onSelect={onSelect}
          onRemove={onRemove}
          onRename={onRename}
        />
      ) : (
        <Button
          type="button"
          variant={variant}
          key={channel.id}
          className="w-100 rounded-0 text-start"
          onClick={() => onSelect(channel)}
        >
          <span className="me-1">#</span>
          {channel.name}
        </Button>
      )}
    </li>
  );
};
