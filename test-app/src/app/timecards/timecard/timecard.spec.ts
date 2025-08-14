import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timecard } from './timecard';

describe('Timecard', () => {
  let component: Timecard;
  let fixture: ComponentFixture<Timecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
