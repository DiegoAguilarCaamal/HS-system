import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesActualesComponent } from './clientes-actuales.component';

describe('ClientesActualesComponent', () => {
  let component: ClientesActualesComponent;
  let fixture: ComponentFixture<ClientesActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesActualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
