import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-orchestrator",
  templateUrl: "./orchestrator.component.html",
  styleUrls: ["./orchestrator.component.css"],
})
export class OrchestratorComponent implements OnInit {
  @Input() items: any;
  @Input() itemsInSection: any;
  @Input() data: any;

  constructor() {}
  ngOnInit(): void {
    //console.log(this.data);
    this.changeValues();
  }

  changeValues() {
    let aux: any = [];
    this.items.map((item: any) => {
      if (item.kind === "text") {
        aux.push(item);
      }
      if (item.kind === "date") {
        let obj: any = {};
        obj.id = item.id;
        obj.kind = item.kind;
        obj.label = item.label;
        obj.subtext = item.subtext;
        obj.metadado = item.metadado;

        var date = new Date(item.value);
        var d = this.sanitizeDateNumber(date.getDate());
        var m = this.sanitizeDateNumber(date.getMonth() + 1);
        var y = date.getFullYear();
        var newDate = `${d}/${m}/${y}`;
        obj.value = newDate;

        aux.push(obj);
      }
    });
    this.items = aux;
  }

  sanitizeDateNumber(n: number): any {
    if (n < 10) {
      return "0" + n;
    }
    return n;
  }
}
