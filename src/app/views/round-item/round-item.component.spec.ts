import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundItemComponent } from './round-item.component';

describe('RoundItemComponent', () => {
  let component: RoundItemComponent;
  let fixture: ComponentFixture<RoundItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
