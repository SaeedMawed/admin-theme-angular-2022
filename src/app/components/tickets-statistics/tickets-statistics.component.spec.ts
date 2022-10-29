import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsStatisticsComponent } from './tickets-statistics.component';

describe('TicketsStatisticsComponent', () => {
  let component: TicketsStatisticsComponent;
  let fixture: ComponentFixture<TicketsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
