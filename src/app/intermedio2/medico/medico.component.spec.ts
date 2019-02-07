import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        // component = new MedicoComponent();
        // test de integracion Para poder compilarlo con otras depencencias.

        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService], // si utilizase servicios
            imports: [HttpClientModule]
        });
        // Crear el componente creado y procesasdo por angular (acceso al DOM)
        fixture = TestBed.createComponent( MedicoComponent );
        // Instacia del componente donde pudedo usar todos sus métodos.
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect( component ).toBeTruthy(true);
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Juan';
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre);
    });

});
