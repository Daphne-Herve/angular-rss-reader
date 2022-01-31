import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsActionsComponent } from './news-actions.component';

describe('NewsActionsComponent', () => {
  let component: NewsActionsComponent;
  let fixture: ComponentFixture<NewsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
