import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBetComponent } from './edit-bet.component';

describe('EditBetComponent', () => {
  let component: EditBetComponent;
  let fixture: ComponentFixture<EditBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
