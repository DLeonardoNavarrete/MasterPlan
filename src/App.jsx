import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import { carPrin } from './data';
import DetalleImagen from './components/DetalleImagen';
import DetalleProyecto from './components/DetalleProyecto';
import { useState, useEffect } from 'react';
import SkeletonCarrusel from './components/SkeletonCarrusel';
import Login from './components/Login';

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
 /*  const [view, setView] = useState('home'); */
  return (
    <Router>
      <Navbar />
      <main className="content-area">
        <Routes>
          <Route path="/" element={
            <div className="page-layout">
              {carPrin.map(data => (
                <Carrusel key={data.id} imagenes={data.imagenes} />
              ))}
            </div>
          } />
          <Route path="/galeria" element={
            <div className="page-layout">
              <h2>Explorar Galería</h2>
            </div>
          } />
          <Route path="/proyecto/:id" element={<DetalleProyecto />} />
          <Route path="/detalle/:proyectoId/:imagenId" element={<DetalleImagen />} />
{/*           {view === 'home' && (
            <seccion className="home-section">
              <button onClick={() => setView('login')}>Iniciar Sesión</button>
              <Home />
            </seccion>
          )}
          {view === 'login' && <Login onBack={() => setView('home')} />
            } */}
            
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;