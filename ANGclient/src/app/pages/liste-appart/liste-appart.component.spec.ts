import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppartComponent } from './liste-appart.component';

describe('ListeAppartComponent', () => {
  let component: ListeAppartComponent;
  let fixture: ComponentFixture<ListeAppartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
