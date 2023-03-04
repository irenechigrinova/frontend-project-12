import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Navbar as Nav } from 'react-bootstrap';

import { logout } from '../../store/entities/user/user.slice';

export const Navbar = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <Nav bg="white" expand="lg" className="shadow-sm">
      <div className="container">
        <Nav.Brand as={Link} to="/">
          Hexlet Chat
        </Nav.Brand>
        {user?.data && <Button onClick={handleLogout}>Выйти</Button>}
      </div>
    </Nav>
  );
};
