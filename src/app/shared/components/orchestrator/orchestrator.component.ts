import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-orchestrator",
  templateUrl: "./orchestrator.component.html",
  styleUrls: ["./orchestrator.component.css"],
})
export class OrchestratorComponent implements OnInit {
  @Input() items: any;

  constructor() {}
  ngOnInit(): void {}
}
