import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPortionComponent } from './bottom-portion.component';

describe('BottomPortionComponent', () => {
  let component: BottomPortionComponent;
  let fixture: ComponentFixture<BottomPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomPortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
