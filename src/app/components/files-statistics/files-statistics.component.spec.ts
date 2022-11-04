import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesStatisticsComponent } from './files-statistics.component';

describe('FilesStatisticsComponent', () => {
  let component: FilesStatisticsComponent;
  let fixture: ComponentFixture<FilesStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
