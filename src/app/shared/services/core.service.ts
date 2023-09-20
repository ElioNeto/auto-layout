import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//import data from "../../../../mocks/layout.json";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor(private http: HttpClient) {}

  BASEURL: string = "http://localhost:3000/";

  getData(): Observable<any> {
    return this.http.get(`${this.BASEURL}layout`);
  }
}
