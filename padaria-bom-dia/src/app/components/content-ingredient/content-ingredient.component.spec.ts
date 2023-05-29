import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIngredientComponent } from './content-ingredient.component';

describe('ContentIngredientComponent', () => {
  let component: ContentIngredientComponent;
  let fixture: ComponentFixture<ContentIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentIngredientComponent]
    });
    fixture = TestBed.createComponent(ContentIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
