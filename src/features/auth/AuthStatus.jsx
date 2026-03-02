import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../api/supabaseClient';
import ProtectedRoute from './ProtectedRoute';

const AuthStatus = ({ seccion }) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };
    if (seccion) {
        return(
            <div className="user-info">
                <span>👤</span>
                <Link to='/user' className="btn-perfil">Perfil</Link>
                <button onClick={handleLogout} className="btn-salir-sesion">Cerrar sesión</button>
            </div>
        );
    }
    return <Link to="/login" className="btn-iniciar-sesion">Iniciar sesión</Link>;
}
export default AuthStatus;