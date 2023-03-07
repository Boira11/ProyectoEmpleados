import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadohijoCComponent } from './empleadohijo-c.component';

describe('EmpleadohijoCComponent', () => {
  let component: EmpleadohijoCComponent;
  let fixture: ComponentFixture<EmpleadohijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadohijoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadohijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
