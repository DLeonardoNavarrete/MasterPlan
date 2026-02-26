import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Login({ onBack }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            alert('Error: ' + error.message);
        } else {
            navigate('/admin');
            alert('Ya estás adentro!');
            console.log("Usuario logueado: ", supabase.auth.user());
        }
        if (!error) {
            navigate('/admin');
        }
    };
    return (
        <div className="login-container">
            <button onClick={onBack}>Volver</button>
            <h2>Inicias Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)
                    } />
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)
                    } />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}