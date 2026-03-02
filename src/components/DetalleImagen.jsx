import { useParams} from 'react-router-dom';
import { carPrin } from './data';
import './DetalleImagen.css';

const DetalleImagen = () => {
  const { proyectoId, imagenId } = useParams();

  const proyecto = carPrin.find(p => p.id === proyectoId);
  const imagen = proyecto?.imagenes[imagenId];

  if (!imagen) return <p>Contenido no encontrado</p>;

  return (
    <div className="detalle-contenedor">
      <div className="detalle-card">
        <img src={imagen.src} alt={imagen.info} />
        <h2>{imagen.info}</h2>
        <span className="reacts-badge">{imagen.reacts}</span>
      </div>
    </div>
  );
};
export default DetalleImagen;