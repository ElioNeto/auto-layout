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
        sections: [
          {
            id: "section001",
            title: "Linguagens Core",
            description: null,
          },
          {
            id: "section002",
            title: "Linguagens Cola",
            description: null,
          },
          {
            id: "section003",
            title: "Frameworks e Libs",
            description: null,
          },
        ],
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {}
}
