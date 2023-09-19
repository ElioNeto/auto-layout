import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-core",
  templateUrl: "./core.component.html",
  styleUrls: ["./core.component.css"],
})
export class CoreComponent implements OnInit {
  layout: any = {
    pages: [
      {
        title: "Linguagens de Programação",
        id: "page001",
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {}
}
