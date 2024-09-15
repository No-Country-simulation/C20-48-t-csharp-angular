import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoProfesorComponent } from './foro-profesor.component';

describe('ForoProfesorComponent', () => {
  let component: ForoProfesorComponent;
  let fixture: ComponentFixture<ForoProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
