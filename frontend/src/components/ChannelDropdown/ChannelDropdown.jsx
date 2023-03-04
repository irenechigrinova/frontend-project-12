import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';

export const ChannelDropdown = ({
  id,
  name,
  variant,
  onSelect,
  onRemove,
  onRename,
}) => (
  <Dropdown as={ButtonGroup} className="d-flex">
    <Button
      type="button"
      key={id}
      className="w-100 rounded-0 text-start text-truncate"
      onClick={() => onSelect({ id, name })}
      variant={variant}
    >
      <span className="me-1">#</span>
      {name}
    </Button>
    <Dropdown.Toggle split className="flex-grow-0" variant={variant}>
      <span className="visually-hidden">Меню</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={() => onRemove(id)}>Удалить</Dropdown.Item>
      <Dropdown.Item onClick={() => onRename(id)}>Переименовать</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
