import { Jugador2 } from './jugador';

let jugador: Jugador2;

describe('Jugador2 Emit', () => {
    beforeEach(() => jugador = new Jugador2() );

    it('Debe de emitir un evento cuando recibe un golpe de 1000  retornar 0', () => {
        let nuevoHP = 0;
        jugador.hpChange.subscribe( hp => {
            nuevoHP = hp;
        });

        jugador.impacto(1000);
        expect(nuevoHP).toBe(0);
    } );
    it('Debe de emitir un evento cuando recibe un golpe de menos de 100 y sobrevivir', () => {
        let nuevoHP = 0;
        jugador.hpChange.subscribe( hp => {
            nuevoHP = hp;
        });

        jugador.impacto(20);
        expect(nuevoHP).toBe(80);
    } );
});
