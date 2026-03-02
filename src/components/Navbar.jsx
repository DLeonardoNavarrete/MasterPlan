import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthStatus from '../features/auth/AuthStatus';

const Navbar = ({ seccion }) => {
  return (
    <header className="main-header">
      <h1 className="nav-container">
      <nav>
        <Link to="/" className="nav-logo">MasterPlan</Link>
        <AuthStatus seccion={seccion} />
      </nav>
      </h1>
    </header>
  );
};
export default Navbar;