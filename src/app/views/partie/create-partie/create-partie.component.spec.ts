import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartieComponent } from './create-partie.component';

describe('CreatePartieComponent', () => {
  let component: CreatePartieComponent;
  let fixture: ComponentFixture<CreatePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
