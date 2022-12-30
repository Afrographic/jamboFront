import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfirmPasswordComponent } from './add-confirm-password.component';

describe('AddConfirmPasswordComponent', () => {
  let component: AddConfirmPasswordComponent;
  let fixture: ComponentFixture<AddConfirmPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfirmPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfirmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
