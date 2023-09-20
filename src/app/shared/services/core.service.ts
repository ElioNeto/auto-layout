import { Injectable } from "@angular/core";

import data from "../../mocks/layout.json";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor() {}

  getData() {
    return data;
  }
}
