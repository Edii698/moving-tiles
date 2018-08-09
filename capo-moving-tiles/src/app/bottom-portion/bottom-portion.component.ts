import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-bottom-portion",
  templateUrl: "./bottom-portion.component.html",
  styleUrls: ["./bottom-portion.component.scss"]
})
export class BottomPortionComponent implements OnInit {
  photos$: Object;

  large = 6;

  colors = ["pink", "blue", "yellow", "green", "cobalt", "orange"];

  borderColor = this.colors[Math.floor(Math.random() * 6)];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPhotosPageTwo().subscribe(data => (this.photos$ = data));
  }

  getRandom() {
    this.borderColor = this.colors[Math.floor(Math.random() * 6)];
    console.log(this.borderColor);
  }

  onChangeClass(id) {
    // console.log(this.large);
    // console.log(id);
    if (id != this.large) {
      this.large = id;
      this.getRandom();
    }
    // console.log(this.large);
  }

  getClass(id) {
    if (id == this.large) {
      return `large animated pulse ${this.borderColor}`;
    } else {
      return "small animated zoomIn";
    }
  }
}
