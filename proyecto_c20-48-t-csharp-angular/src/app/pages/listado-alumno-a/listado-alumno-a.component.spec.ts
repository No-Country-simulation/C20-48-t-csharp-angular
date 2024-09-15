import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnoAComponent } from './listado-alumno-a.component';

describe('ListadoAlumnoAComponent', () => {
  let component: ListadoAlumnoAComponent;
  let fixture: ComponentFixture<ListadoAlumnoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlumnoAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAlumnoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
