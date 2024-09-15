import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoalumnosBComponent } from './listadoalumnos-b.component';

describe('ListadoalumnosBComponent', () => {
  let component: ListadoalumnosBComponent;
  let fixture: ComponentFixture<ListadoalumnosBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoalumnosBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoalumnosBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
