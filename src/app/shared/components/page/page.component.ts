import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit {
  @Input() page: any;

  constructor() {}
  ngOnInit(): void {
    console.log(this.page);
  }
}
