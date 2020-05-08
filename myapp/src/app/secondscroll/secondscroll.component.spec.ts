import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondscrollComponent } from './secondscroll.component';

describe('SecondscrollComponent', () => {
  let component: SecondscrollComponent;
  let fixture: ComponentFixture<SecondscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
