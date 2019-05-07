import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreimbComponent } from './viewreimb.component';

describe('ViewreimbComponent', () => {
  let component: ViewreimbComponent;
  let fixture: ComponentFixture<ViewreimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
