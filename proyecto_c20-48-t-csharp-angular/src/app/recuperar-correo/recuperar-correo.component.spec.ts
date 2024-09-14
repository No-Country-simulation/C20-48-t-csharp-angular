import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCorreoComponent } from './recuperar-correo.component';

describe('RecuperarCorreoComponent', () => {
  let component: RecuperarCorreoComponent;
  let fixture: ComponentFixture<RecuperarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
