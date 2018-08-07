import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPortionComponent } from './top-portion.component';

describe('TopPortionComponent', () => {
  let component: TopPortionComponent;
  let fixture: ComponentFixture<TopPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
