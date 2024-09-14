import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationalNotificationComponent } from './add-educational-notification.component';

describe('AddEducationalNotificationComponent', () => {
  let component: AddEducationalNotificationComponent;
  let fixture: ComponentFixture<AddEducationalNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationalNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
