import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdscrollComponent } from './thirdscroll.component';

describe('ThirdscrollComponent', () => {
  let component: ThirdscrollComponent;
  let fixture: ComponentFixture<ThirdscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
