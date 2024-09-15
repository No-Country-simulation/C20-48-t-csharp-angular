import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoalumnosCComponent } from './listadoalumnos-c.component';

describe('ListadoalumnosCComponent', () => {
  let component: ListadoalumnosCComponent;
  let fixture: ComponentFixture<ListadoalumnosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoalumnosCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoalumnosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
