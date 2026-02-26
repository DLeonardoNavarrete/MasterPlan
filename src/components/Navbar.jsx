import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="main-header">
      <h1 className="nav-container">
        <Link to="/" className="nav-logo">MasterPlan</Link>
        <Link to="/login">Acceso</Link>
      </h1>
    </header>
  );
};
export default Navbar;