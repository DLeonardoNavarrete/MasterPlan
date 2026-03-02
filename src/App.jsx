import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importación de datos
import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { carPrin } from './utils/data';

// importación de componentes 1a
import SkeletonCarrusel from './components/SkeletonCarrusel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// importación de componentes 1b
import DetalleProyecto from './features/projects/DetalleProyecto';
import DetalleImagen from './features/projects/DetalleImagen';
import Carrusel from './features/projects/Carrusel';

// importación de rutas-seuridad
import ProtectedRoute from './features/auth/ProtectedRoute';
import AdminPanel from './features/admin/AdminPanel';
import Login from './features/auth/Login';

// codigo madre
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home-container">
      {loading ? (
        [1, 2, 3].map((n) => <SkeletonCarrusel key={n} />)
      ) : (
        carPrin.map(seccion => (
          <Carrusel
            key={seccion.id}
            idSeccion={seccion.id}
            imagenes={seccion.imagenes}
            tituloSeccion={seccion.id.replace('_', ' ')}
            parrafoSeccion={seccion.imagenes[0]?.info}
          />
        ))
      )}
    </div>
  );
};

function App() {
  const [seccion, setSeccion] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSeccion(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSeccion(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <Router>
      <Navbar seccion={seccion} />
      <main className="content-area">
        <Routes>
          <Route path="/" element={
            <div className="page-layout">
              {carPrin.map(data => (
                <Carrusel key={data.id} imagenes={data.imagenes} />
              ))}
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:userName" element={
            <ProtectedRoute seccion={seccion}>
              <AdminPanel seccion={seccion} />
            </ProtectedRoute>
          } />
          <Route path="/galeria" element={
            <div className="page-layout">
              <h2>Explorar Galería</h2>
            </div>
          } />
          <Route path="/proyecto/:id" element={<DetalleProyecto />} />
          <Route path="/detalle/:proyectoId/:imagenId" element={<DetalleImagen />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;