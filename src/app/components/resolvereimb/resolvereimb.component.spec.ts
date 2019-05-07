import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvereimbComponent } from './resolvereimb.component';

describe('ResolvereimbComponent', () => {
  let component: ResolvereimbComponent;
  let fixture: ComponentFixture<ResolvereimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolvereimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvereimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
