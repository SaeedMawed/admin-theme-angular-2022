import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyTargetsComponent } from './yearly-targets.component';

describe('YearlyTargetsComponent', () => {
  let component: YearlyTargetsComponent;
  let fixture: ComponentFixture<YearlyTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyTargetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
