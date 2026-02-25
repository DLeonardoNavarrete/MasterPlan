import { useState } from 'react';
import { supabase} from './supabaseClient';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ 
            email: email,
            password: password,
        });
        if (error) {
            alert('Error logging in: ' + error.message);
        } else {
            alert('Logged in successfully!');
            console.log(data);
        }
    };
    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}