import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailappartComponent } from './detailappart.component';

describe('DetailappartComponent', () => {
  let component: DetailappartComponent;
  let fixture: ComponentFixture<DetailappartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailappartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailappartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
