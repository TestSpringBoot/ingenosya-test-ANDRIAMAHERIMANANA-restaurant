import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleIngredientComponent } from './formule-ingredient.component';

describe('FormuleIngredientComponent', () => {
  let component: FormuleIngredientComponent;
  let fixture: ComponentFixture<FormuleIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuleIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuleIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
