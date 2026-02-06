import { useParams } from 'react-router-dom';
import { detallesProyectos } from '../data';
import Carrusel from './Carrusel';
import { useState, useEffect,} from 'react';

const DetalleProyecto = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [id]);
  if (loading) {
    return (<div className="detalle-page">
        <div className="skeleton skeleton-title" style={{ margin: '0 auto 20px' }}></div>
        <div className="skeleton skeleton-image" style={{ height: '60vh' }}></div>
      </div>
  );
}
  const contenido = detallesProyectos.find(item => item.id === id);
  if (!contenido) {
    return <p>Contenido no encontrado en data.js</p>;
  }

  return (
    <div className="detalle-page">
      <Carrusel
        imagenes={contenido.galeria}
        tituloSeccion={contenido.titulo}
        parrafoSeccion={contenido.parrafo}
      />
    </div>
  );
};
export default DetalleProyecto;