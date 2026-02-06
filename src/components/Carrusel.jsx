import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrusel.css';
import { Link } from 'react-router-dom';

const handleShare = async (titulo, Texto, id)=>{
  const shareData={
    title: titulo,
    text: Texto,
    url: `${window.location.origin}/proyecto/${id}`,
  };
  try {
    if(navigator.share){
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("Enlace copiado al portapapeles");
    }
  } catch (err){
    console.error("Error al compartir:", err);
  }
};
const Carrusel = ({ imagenes, tituloSeccion, parrafoSeccion }) => {
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
        {tituloSeccion &&(
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
              <Link key={i} to={img.link} target={img.pestañaNueva?"_blank":"_self"}rel={img.pestañaNueva?"noopener noreferrer":undefined} >
              <img src={img.src} alt={`Imagen${i}`}className="img"/>
              </Link>
              {(img.reacts || img.info) && (
                <div className='carrusel-sidebar'>
                  <div className='reacts'>{img.reacts}</div>
                  <div className='info'>
                    <p>{img.info}</p>
                  </div>
                  <button className="btn-share" onClick={() =>handleShare(contenido.título, contenido.parrafo, contenido.id)}>
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
}
export default Carrusel;