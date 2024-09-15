import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasProfesorComponent } from './tareas-profesor.component';

describe('TareasProfesorComponent', () => {
  let component: TareasProfesorComponent;
  let fixture: ComponentFixture<TareasProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
