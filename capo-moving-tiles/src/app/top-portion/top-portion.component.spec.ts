import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopPortionComponent } from "./top-portion.component";
import { DataService } from "../data.service";

describe("TopPortionComponent", () => {
  let component: TopPortionComponent;
  let fixture: ComponentFixture<TopPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopPortionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // testing api url for top portion
  it("should pull images from unsplash api", () => {
    let fixture = TestBed.createComponent(TopPortionComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
    expect(dataService.getPhotosPageOne).toEqual(app.getPhotosPageOne);
  });
});
