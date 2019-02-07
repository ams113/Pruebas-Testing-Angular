import { increment } from './numeros';

xdescribe('Pruebas de números', () => {
    it('Debe de retornar 100, si el número ingresado es mayor a 100', () => {
        const res = increment(300);
        expect(res).toBe(100);
    });
    it('Debe de retornar el número + 1', () => {
        const res = increment(50);
        expect(res).toBe(51);
    });
});
