import { useParams } from 'react-router-dom';
import { detallesProyectos } from '../data';
import Carrusel from './Carrusel';

const DetalleProyecto = () => {
  const { id } = useParams();

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