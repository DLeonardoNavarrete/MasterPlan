document.addEventListener('DOMContentLoaded', () => {

    const carruselItems = document.querySelectorAll('.carrusel-item');

    carruselItems.forEach(carrusel => {

        // declaracion de clases
        const carruselImagenes = carrusel.querySelector('.carrusel-imagenes');
        const puntos = carrusel.querySelectorAll('.punto');
        const flechaAnterior = carrusel.querySelector('.flecha.anterior');
        const flechaSiguiente = carrusel.querySelector('.flecha.siguiente');
        
        // Elementos a actualizar dinámicamente
        const reactsDiv = carrusel.querySelector('.reacts');
        const infoDiv = carrusel.querySelector('.info');
        
        const numImagenes = carruselImagenes.querySelectorAll('.img').length;
        let indiceActual = 0;

        // variables del scroll horizontal
        let inicioX = 0; 
        let desplazamientoX = 0;
        let arrastrando = false; 
        const umbralSwipe = 50; 
        
        // funcion principal, actualizacion de imagen

        function actualizarCarrusel(transicion = true) {
            const desplazamiento = -indiceActual * 100;

            // transicion
            if (transicion) {
                carruselImagenes.style.transition = 'transform 0.75s ease-in-out';
            } else {
                carruselImagenes.style.transition = 'none';
            }

            // realiza movimiento
            carruselImagenes.style.transform = `translateX(${desplazamiento}%)`;

            // cambia de punto.activo
            puntos.forEach((punto, index) => {
                punto.classList.toggle('activo', index === indiceActual);
            });
            
            // actualizacion de informacion
            const imagenes = carruselImagenes.querySelectorAll('.img');
            const imagenActual = imagenes[indiceActual];
            
            if (imagenActual && reactsDiv && infoDiv) {
                const nuevoReacts = imagenActual.dataset.reacts;
                const nuevoInfo = imagenActual.dataset.info;
                
                reactsDiv.textContent = nuevoReacts || 'Sin reacciones'; 
                infoDiv.innerHTML = `<p>${nuevoInfo || 'Sin información adicional.'}</p>`; 
            }
            
            // desactivacion de flechas
            if (flechaAnterior && flechaSiguiente) {
                 flechaAnterior.disabled = indiceActual === 0;
                 flechaSiguiente.disabled = indiceActual === numImagenes - 1;
            }
        }

        // funcionalidad de tactil

        carruselImagenes.addEventListener('touchstart', (e) => {
            inicioX = e.touches[0].clientX;
            arrastrando = true;
            carruselImagenes.style.transition = 'none'; 
        });

        carruselImagenes.addEventListener('touchmove', (e) => {
            if (!arrastrando) return;
            const movimientoX = e.touches[0].clientX;
            desplazamientoX = movimientoX - inicioX; 

            const posicionActual = -indiceActual * 100;
            const desplazamientoPorcentaje = (desplazamientoX / carruselImagenes.offsetWidth) * 100;

            carruselImagenes.style.transform = `translateX(${posicionActual + desplazamientoPorcentaje}%)`;
        });

        carruselImagenes.addEventListener('touchend', () => {
            if (!arrastrando) return;
            arrastrando = false;

            if (desplazamientoX < -umbralSwipe) { 
                indiceActual = Math.min(indiceActual + 1, numImagenes - 1); 
            } else if (desplazamientoX > umbralSwipe) { 
                indiceActual = Math.max(indiceActual - 1, 0); 
            }

            desplazamientoX = 0;
            actualizarCarrusel(); 
        });
        
        // contenido de puntos y plechas

        puntos.forEach(punto => {
            punto.addEventListener('click', () => {
                const index = parseInt(punto.dataset.index);
                indiceActual = index;
                actualizarCarrusel();
            });
        });

        if (flechaSiguiente) {
            flechaSiguiente.addEventListener('click', () => {
                indiceActual = Math.min(indiceActual + 1, numImagenes - 1);
                actualizarCarrusel();
            });
        }

        if (flechaAnterior) {
            flechaAnterior.addEventListener('click', () => {
                indiceActual = Math.max(indiceActual - 1, 0);
                actualizarCarrusel();
            });
        }

        actualizarCarrusel();
    /* const imagenes = carruselImagenes.querySelectorAll('.img').length;
        setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes;
        actualizarCarrusel();
        }, 4500); // Cambia cada 3 segundos */
    });
});