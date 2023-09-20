import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent {
  @Input() page: any;
  @Input() data: any;
  @Input() sections: any;
  @Input() contents: any;
}
