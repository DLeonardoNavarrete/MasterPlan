import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Login({ onBack }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (data?.error)
            console.log("Nombre del usuario", data.error.message);
        if (error) {
            alert("Error" + error.message);
        } else {
            navigate('/user');
        }
        const { data: userData } = await supabase
            .from('registros_empresa')
            .select('nombre_usuario')
            .single();
        if (userData) {
            const slug = userData.nombre_usuario.toLowerCase().replace(/\s+/g, '-');
            navigate(`/user/${slug}`);
        }
    };
    return (
        <div className="login-container">
            <button type="button" onClick={onBack} className="btn-back">Volver</button>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    required
                    onChange={(e) => setEmail(e.target.value)
                    } />
                <input
                    type="password"
                    placeholder="Tu contraseña"
                    required
                    onChange={(e) => setPassword(e.target.value)
                    } />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}