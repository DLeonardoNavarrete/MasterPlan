import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrusel.css';
import { Link } from 'react-router-dom';

const Carrusel = ({ imagenes, tituloSeccion, parrafoSeccion, idSeccion }) => {
  const handleShare = async (titulo, texto, id) => {
    const idFinal = id || imagenes[0]?.link?.split('/').pop();
    const url = `${window.location.origin}/proyecto/${idFinal}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: titulo, text: texto, url: url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Enlace copiado");
      }
    } catch (err) {
      console.error("Error al compartir:", err);
    }
  };
  return (
    <div className="carrusel-item">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="carrusel-contenido"
      >
        {tituloSeccion && (
          <SwiperSlide>
            <div className="bienvenida">
              <h1>{tituloSeccion}</h1>
              <p>{parrafoSeccion}</p>
              <div className="bienvenida-indicador">Desliza →</div>
            </div>
          </SwiperSlide>
        )}
        {imagenes.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slide-container">
              <Link 
                to={img.link || "#"}
                target={img.pestañaNueva ? "_blank" : "_self"}
                rel={img.pestañaNueva ? "noopener noreferrer" : undefined} 
              >
                <img 
                  src={img.src} 
                  alt={`Imagen${i}`} 
                  className="img" 
                />
              </Link>
              {(img.reacts || img.info) && (
                <div className='carrusel-sidebar'>
                  <div className='reacts'>{img.reacts}</div>
                  <div className='info'>
                    <p>{img.info}</p>
                  </div>
                  <button 
                    className="btn-share" 
                    onClick={() => handleShare(tituloSeccion, parrafoSeccion, idSeccion)}
                  >
                    <i className='fa-solid fa-share-nodes'></i> Compartir
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carrusel;