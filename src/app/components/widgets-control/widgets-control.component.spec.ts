import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsControlComponent } from './widgets-control.component';

describe('WidgetsControlComponent', () => {
  let component: WidgetsControlComponent;
  let fixture: ComponentFixture<WidgetsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
