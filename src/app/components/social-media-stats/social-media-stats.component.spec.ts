import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaStatsComponent } from './social-media-stats.component';

describe('SocialMediaStatsComponent', () => {
  let component: SocialMediaStatsComponent;
  let fixture: ComponentFixture<SocialMediaStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
