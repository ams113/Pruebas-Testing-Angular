import { obtenerRobots } from './arrays';

xdescribe('Pruebas de arreglos', () => {
    it('Debe de retornar al menos 3 Robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de Megaman y Ultrón', () => {
        const res = obtenerRobots();
        expect(res).toContain('MegaMan', 'Ultrón');
    });
});
