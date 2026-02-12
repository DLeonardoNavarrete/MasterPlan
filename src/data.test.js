import { describe, it, expect } from 'vitest';
import { carPrin, detallesProyectos } from './data';

describe('Validacion de integridad de datos', () => {
    it('Todos los Ids del home deben existir en Detalle', () => {
        const idsPrincipales = carPrin.map(seccion => seccion.id);
        const idsDetalle = detallesProyectos.map(seccion => seccion.id);
        idsPrincipales.forEach(id => {
            expect(idsDetalle, `El Id "${id}" en carPrin no tiene un detalle correspondiente en detallesProyectos`).toContain(id);
        });
    });
    it('No deben existir IDs duplicados en carPrin', () => {
        const ids = carPrin.map(seccion => seccion.id);
        const idsUnicos = [...new ServiceWorker(ids)];
        expect(ids.length).toBe(idsUnicos.length);
    });
});