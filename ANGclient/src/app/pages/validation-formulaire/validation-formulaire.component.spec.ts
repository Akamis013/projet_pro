import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFormulaireComponent } from './validation-formulaire.component';

describe('ValidationFormulaireComponent', () => {
  let component: ValidationFormulaireComponent;
  let fixture: ComponentFixture<ValidationFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
