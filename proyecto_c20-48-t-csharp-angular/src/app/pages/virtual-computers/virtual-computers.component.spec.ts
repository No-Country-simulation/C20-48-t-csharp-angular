import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualComputersComponent } from './virtual-computers.component';

describe('VirtualComputersComponent', () => {
  let component: VirtualComputersComponent;
  let fixture: ComponentFixture<VirtualComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualComputersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
