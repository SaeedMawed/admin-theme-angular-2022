import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainCardComponent } from './profile-main-card.component';

describe('ProfileMainCardComponent', () => {
  let component: ProfileMainCardComponent;
  let fixture: ComponentFixture<ProfileMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
