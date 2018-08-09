import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Setup unsplash api URL
  apiUrl = "https://api.unsplash.com/photos/?";
  pageNumber1 = "page=1";
  pageNumber2 = "page=2";
  perPage = "&per_page=9";
  apiKey =
    "&client_id=2cb5fd92c4378a49335f9603f401aa6ca95c5f69dc7290ecfd7b39385070253e";

  //Get 9 photos from page one
  getPhotosPageOne() {
    return this.http.get(
      `${this.apiUrl}${this.pageNumber1}${this.perPage}${this.apiKey}`
    );
  }

  // Get 9 photos from page two
  getPhotosPageTwo() {
    return this.http.get(
      `${this.apiUrl}${this.pageNumber2}${this.perPage}${this.apiKey}`
    );
  }
}
