import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import { carPrin } from './data';
import './App.css';
import './index.css';
import DetalleImagen from './components/DetalleImagen';
import DetalleProyecto from './components/DetalleProyecto';
import { useState, useEffect } from 'react';
import SkeletonCarrusel from './components/SkeletonCarrusel';

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
        carPrin.map(item => (
          <Carrusel key={item.id} imagenes={item.imagenes} tituloSeccion={item.id.replace('_', ' ')} />
        ))
      )}
    </div>
  );
};

function App() {
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
        </Routes>
      </main>
      <footer className="main-footer">
        <p>© 2026 MasterPlan - Gestión de Proyectos</p>
      </footer>
    </Router>
  );
}
export default App;