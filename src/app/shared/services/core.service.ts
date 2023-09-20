import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

//import data from "../../../../mocks/layout.json";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor(private http: HttpClient) {}

  BASEURL: string = "http://localhost:3000/";

  getData(id: string): Observable<any> {
    const url = `${this.BASEURL}data/${id}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError("ID not found!");
        }
        return throwError("unknown error");
      })
    );
  }

  getLayout(id: string): Observable<any> {
    const url = `${this.BASEURL}layout/${id}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError("ID not found!");
        }
        return throwError("unknown error");
      })
    );
  }
}
