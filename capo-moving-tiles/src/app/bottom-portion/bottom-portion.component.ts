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
  //Use this index for the first large image
  large = 6;
  //Class names for colors
  colors = ["pink", "blue", "yellow", "green", "cobalt", "orange"];
  //Initial border color
  borderColor = this.colors[Math.floor(Math.random() * 6)];

  constructor(private data: DataService) {}

  ngOnInit() {
    //on load get photos from api
    this.data.getPhotosPageTwo().subscribe(data => (this.photos$ = data));
  }

  //Get a random border color
  getRandom() {
    this.borderColor = this.colors[Math.floor(Math.random() * 6)];
    console.log(this.borderColor);
  }

  //On click see if id number is not equal to current "large" value
  onChangeClass(id) {
    // console.log(this.large);
    // console.log(id);
    if (id != this.large) {
      this.large = id;
      this.getRandom();
    }
    // console.log(this.large);
  }

  //Set the class for the current "large" photo
  getClass(id) {
    if (id == this.large) {
      return `large animated pulse ${this.borderColor}`;
    } else {
      return "small animated zoomIn";
    }
  }
}
