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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPhotosPageTwo().subscribe(data => (this.photos$ = data));
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
      return "large";
    } else {
      return "small";
    }
  }
}
