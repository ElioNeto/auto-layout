import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.css"],
})
export class SectionComponent {
  @Input() sections: any;
  @Input() contents: any;
  @Input() data: any;
  @Input() sectionsInPage: any;
}
