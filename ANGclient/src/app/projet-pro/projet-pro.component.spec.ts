import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetProComponent } from './projet-pro.component';

describe('ProjetProComponent', () => {
  let component: ProjetProComponent;
  let fixture: ComponentFixture<ProjetProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
