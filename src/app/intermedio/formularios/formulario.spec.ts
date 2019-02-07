import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Fomularios', () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it(' Debe de crear un componente con dos campos, email y password', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });
    it('El email debe de ser obligatorio', () => {
        const ctrl = componente.form.get('email');
        ctrl.setValue('');
        expect( ctrl.valid ).toBeFalsy();
    });

    it('El email debe de ser un correo valido', () => {
        const ctrl = componente.form.get('email');
        ctrl.setValue('toni@gmail.com');
        expect( ctrl.valid ).toBeTruthy();
    });

    it('El validador del email no deje pasar email incorrecto', () => {
        const ctrl = componente.form.get('email');
        ctrl.setValue('toni@');
        expect( ctrl.valid ).toBeFalsy();
    });

});
