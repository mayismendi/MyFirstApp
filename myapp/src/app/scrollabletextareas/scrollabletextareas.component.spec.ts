import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollabletextareasComponent } from './scrollabletextareas.component';

describe('ScrollabletextareasComponent', () => {
  let component: ScrollabletextareasComponent;
  let fixture: ComponentFixture<ScrollabletextareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollabletextareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollabletextareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
