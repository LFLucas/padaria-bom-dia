import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDatepickerComponent } from './content-datepicker.component';

describe('ContentDatepickerComponent', () => {
  let component: ContentDatepickerComponent;
  let fixture: ComponentFixture<ContentDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDatepickerComponent]
    });
    fixture = TestBed.createComponent(ContentDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
