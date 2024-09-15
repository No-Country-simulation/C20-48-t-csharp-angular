import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPorofesorComponent } from './header-porofesor.component';

describe('HeaderPorofesorComponent', () => {
  let component: HeaderPorofesorComponent;
  let fixture: ComponentFixture<HeaderPorofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPorofesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPorofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
