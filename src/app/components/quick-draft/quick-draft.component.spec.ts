import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDraftComponent } from './quick-draft.component';

describe('QuickDraftComponent', () => {
  let component: QuickDraftComponent;
  let fixture: ComponentFixture<QuickDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
