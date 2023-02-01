import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingGamesComponent } from './preparing-games.component';

describe('PreparingGamesComponent', () => {
  let component: PreparingGamesComponent;
  let fixture: ComponentFixture<PreparingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparingGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
