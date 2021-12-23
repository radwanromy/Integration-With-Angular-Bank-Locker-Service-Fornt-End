import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerServiceComponent } from './locker-service.component';

describe('LockerServiceComponent', () => {
  let component: LockerServiceComponent;
  let fixture: ComponentFixture<LockerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
