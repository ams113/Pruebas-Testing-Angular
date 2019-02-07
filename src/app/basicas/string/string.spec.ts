import { msg } from './string';

xdescribe('string test', () => {
    it('should return string', () => {
        const resp = msg('Toni');
        expect(typeof resp).toBe('string');
    });
    it('Debe de retornar un saludo con el nombre ', () => {
        const name = 'Toni';
        const resp = msg(name);
        expect(resp).toContain('hello Toni');
    });
});
