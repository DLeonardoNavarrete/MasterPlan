import { Link } from 'react-router-dom';
import './Navbar.css';
import { supabase } from '../supabaseClient';

const Navbar = ({ session }) => {
  return (
    <header className="main-header">
      <h1 className="nav-container">
      <nav>
        <Link to="/" className="nav-logo">MasterPlan</Link>
        <Link to="/login">Acceso</Link>
        {session ? (
          <button onClick={() => supabase.auth.signOut()}>Cerrar Sesión</button>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </nav>
      </h1>
    </header>
  );
};
export default Navbar;