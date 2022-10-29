import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProjectProgressComponent } from './last-project-progress.component';

describe('LastProjectProgressComponent', () => {
  let component: LastProjectProgressComponent;
  let fixture: ComponentFixture<LastProjectProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastProjectProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastProjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
