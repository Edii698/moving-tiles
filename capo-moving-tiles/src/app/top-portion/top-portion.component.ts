import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-top-portion",
  templateUrl: "./top-portion.component.html",
  styleUrls: ["./top-portion.component.scss"]
})
export class TopPortionComponent implements OnInit {
  photos$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPhotosOffice().subscribe(data => (this.photos$ = data));
  }
}
