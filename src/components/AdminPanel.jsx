import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Userview from './VistaUsuario'; 

export default function AdminPanel({ seccion }) {
  const [perfil, setPerfil] = useState(null);
  useEffect(() => {
    async function cargarDatos() {
      const { data, error } = await supabase
        .from('registros_empresa')
        .select('*')
        .single(); 
      if (error) {
        console.error("Error al obtener datos:", error.message);
      } else {
        setPerfil(data);
      }
    }
    if (seccion) cargarDatos();
  }, [seccion]);
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Panel Personal</h2>
        <p>Bienvenido, {seccion?.user?.email}</p>
      </aside>
      <main className="admin-main">
        <Userview info={perfil} />
      </main>
    </div>
  );
}