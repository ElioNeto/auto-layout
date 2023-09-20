import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit {
  @Input() page: any;
  @Input() data: any;
  @Input() sections: any;
  @Input() contents: any;

  constructor() {}
  ngOnInit(): void {}
}
