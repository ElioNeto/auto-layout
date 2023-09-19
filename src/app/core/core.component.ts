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
            items: [
              {
                id: "content001",
                label: "Java",
                value: "compilada",
                kind: "text",
                metadado: null,
              },
              {
                id: "content002",
                label: "C",
                value: "compilada",
                kind: "text",
                metadado: null,
              },
              {
                id: "content003",
                label: "Rust",
                value: "compilada",
                kind: "text",
                metadado: null,
              },
              {
                id: "content004",
                label: "Javascript",
                value: "interpretada",
                kind: "text",
                metadado: null,
              },
              {
                id: "content005",
                label: "Ruby",
                value: "interpretada",
                kind: "text",
                metadado: null,
              },
            ],
          },
          {
            id: "section002",
            title: "Linguagens Cola",
            description: null,
            items: [
              {
                id: "content006",
                label: "Python",
                value: "interpretada",
                kind: "text",
                metadado: null,
              },
            ],
          },
          {
            id: "section003",
            title: "Frameworks e Libs",
            description: null,
            items: [
              {
                id: "content007",
                label: "React",
                value: "JS",
                subtext: "lib",
                kind: "text",
                metadado: null,
              },
              {
                id: "content008",
                label: "Angular",
                value: "JS",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
              {
                id: "content009",
                label: "VUE",
                value: "JS",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
              {
                id: "content010",
                label: "Springboot",
                value: "Java",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
              {
                id: "content011",
                label: "Rails",
                value: "Ruby",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
              {
                id: "content012",
                label: "Jango",
                value: "Python",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
              {
                id: "content013",
                label: "Node",
                value: "JS",
                kind: "text",
                subtext: "framework",
                metadado: null,
              },
            ],
          },
        ],
      },
    ],
  };

  currentPage: number = 1;
  totalPages: number = this.layout.pages.length;
  constructor() {}
  ngOnInit(): void {}

  toNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  toPreviousPage(): void {
    console.log("teste");

    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
