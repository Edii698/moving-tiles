import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrl = "https://api.unsplash.com/photos/?";
  pageNumber = "page=2";
  perPage = "&per_page=9";
  queryOffice = "&query=office";
  queryFood = "&query=food";
  apiKey =
    "&client_id=2cb5fd92c4378a49335f9603f401aa6ca95c5f69dc7290ecfd7b39385070253e";

  getPhotosOffice() {
    return this.http.get(
      `${this.apiUrl}${this.pageNumber}${this.perPage}${this.queryOffice}${
        this.apiKey
      }`
    );
  }

  getPhotosFood() {
    return this.http.get(
      `${this.apiUrl}${this.pageNumber}${this.perPage}${this.queryFood}${
        this.apiKey
      }`
    );
  }
}
