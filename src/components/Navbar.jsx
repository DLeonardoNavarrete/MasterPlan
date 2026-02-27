import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Navbar({ seccion }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error al cerrar sesión:', error.message);
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">MASTERPLAN</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/galeria">Galería</Link>

          {/* Si hay sesión activa (seccion no es null) */}
          {seccion ? (
            <>
              <Link to="/admin">Panel Admin</Link>
              <div className="user-section">
                <span className="user-name">👤 {seccion.user.email}</span>
                <button 
                  onClick={handleLogout} 
                  className="logout-button"
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                >
                  Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            /* Si no hay sesión */
            <Link to="/login" className="login-link">Iniciar Sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
}