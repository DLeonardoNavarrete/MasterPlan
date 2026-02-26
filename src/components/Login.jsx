import { useState } from 'react';
import { supabase} from '../supabaseClient';

export default function Login({ onBack }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ 
            email: email,
            password: password,
        });
        if (error) {
            alert('Error al loguearse: ' + error.message);
        } else {
            alert('El logueo fue exitoso!');
            console.log("Usuario logueado: ", supabase.auth.user());
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
                onChange={(e)=>setEmail(e.target.value)
                    }/>
                <input 
                type="password" 
                placeholder="Contraseña" 
                onChange={ (e) => setPassword(e.target.value)
                }/>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}