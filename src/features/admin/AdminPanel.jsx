import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabaseClient';
import Userview from '../../pages/VistaUsuario'; 
import { useParams } from 'react-router-dom';

export default function AdminPanel({ seccion }) {
  const { userName } = useParams();
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
      <div className="admin-sidebar">
        <h2>{userName.replace(/-/g, ' ')}</h2>
      </div>
      <main className="admin-main">
        <Userview info={perfil} />
      </main>
    </div>
  );
}