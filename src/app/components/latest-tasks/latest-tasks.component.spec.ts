import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTasksComponent } from './latest-tasks.component';

describe('LatestTasksComponent', () => {
  let component: LatestTasksComponent;
  let fixture: ComponentFixture<LatestTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
