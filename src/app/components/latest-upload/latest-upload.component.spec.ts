import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestUploadComponent } from './latest-upload.component';

describe('LatestUploadComponent', () => {
  let component: LatestUploadComponent;
  let fixture: ComponentFixture<LatestUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
