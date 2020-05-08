import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstscrollComponent } from './firstscroll.component';

describe('FirstscrollComponent', () => {
  let component: FirstscrollComponent;
  let fixture: ComponentFixture<FirstscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
