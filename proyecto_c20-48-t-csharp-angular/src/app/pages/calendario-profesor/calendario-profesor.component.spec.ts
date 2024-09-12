import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioProfesorComponent } from './calendario-profesor.component';

describe('CalendarioProfesorComponent', () => {
  let component: CalendarioProfesorComponent;
  let fixture: ComponentFixture<CalendarioProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
