import { usuarioLogueado } from './booleanos';

xdescribe('Pruebas de booleanos', () => {
    it('Debe de retornar true', () => {
        const res = usuarioLogueado();
        expect(res).toBeTruthy();
    });
});
