import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-top-portion",
  templateUrl: "./top-portion.component.html",
  styleUrls: ["./top-portion.component.scss"],
  animations: []
})
export class TopPortionComponent implements OnInit {
  photos$: Object;

  large = 1;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPhotosPageOne().subscribe(data => (this.photos$ = data));
  }

  onChangeClass(id) {
    console.log(this.large);
    console.log(id);
    if (id != this.large) {
      this.large = id;
    }
    console.log(this.large);
  }

  getClass(id) {
    if (id == this.large) {
      return "large animated slideInRight";
    } else {
      return "small";
    }
  }
}
