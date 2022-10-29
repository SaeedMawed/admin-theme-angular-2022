import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchItemComponent } from './top-search-item.component';

describe('TopSearchItemComponent', () => {
  let component: TopSearchItemComponent;
  let fixture: ComponentFixture<TopSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
