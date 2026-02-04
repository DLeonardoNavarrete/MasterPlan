import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <Link to="/" className="nav-logo">MasterPlan</Link>
      </nav>
    </header>
  );
};
export default Navbar;