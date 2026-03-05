import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { carPrin } from './data';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import DetalleImagen from './components/DetalleImagen';
import DetalleProyecto from './components/DetalleProyecto';
import SkeletonCarrusel from './components/SkeletonCarrusel';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';

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
          <Route path="/register" element={
            <ProtectedRoute seccion={seccion}>
              <AdminPanel seccion={seccion} />
            </ProtectedRoute>
          } />
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