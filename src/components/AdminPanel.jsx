import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AdminPanel = ({ session }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from('registros_empresa')
        .select('*')
        .eq('user_id', session.user.id);

      if (!error) setDatos(data);
    };

    if (session) fetchUserData();
  }, [session]);

  return (
    <div className="admin-panel">
      <h2>Panel de Control</h2>
      <p>Bienvenido<strong>{session?.user?.email}</strong></p>
      <hr />
      <div className="data-table">
        {datos.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Proyecto</th>
                <th>Estado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.status}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No se encontraron registros para tu cuenta.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;