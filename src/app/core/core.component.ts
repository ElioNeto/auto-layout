import { Component, OnInit } from "@angular/core";
import { CoreService } from "../shared/services/core.service";

@Component({
  selector: "app-core",
  templateUrl: "./core.component.html",
  styleUrls: ["./core.component.css"],
})
export class CoreComponent implements OnInit {
  layout: any;
  data: any;

  currentPage: number = 1;
  totalPages: number | undefined;

  usemock: boolean = false;

  userId: string = "user00001";

  constructor(private core: CoreService) {}
  ngOnInit(): void {
    if (!this.usemock) {
      setTimeout(() => {
        this.core.getData(this.userId).subscribe((data: any) => {
          this.data = data;
          this.core.getLayout(this.data.layoutId).subscribe((layout: any) => {
            this.layout = layout;
            this.totalPages = this.layout.pages.length;
            this.sanitizeData();
          });
        });
      }, 1500);
    } else {
      this.totalPages = 1;
    }
  }

  toNextPage(): void {
    if (this.currentPage < this.totalPages!) {
      this.currentPage++;
    }
  }
  toPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  sanitizeData() {
    const regex = /[{}}]/g;
    this.layout.contents.map((item: any) => {
      if (item.value?.startsWith("{")) {
        let txt = item.value.replace(regex, "");
        item.value = this.dataSeeker(this.data, txt);
      }
      if (item.label?.startsWith("{")) {
        let txt = item.label.replace(regex, "");
        item.label = this.dataSeeker(this.data, txt);
      }
      if (item.subtext?.startsWith("{")) {
        let txt = item.subtext.replace(regex, "");
        item.subtext = this.dataSeeker(this.data, txt);
      }
    });
  }
  dataSeeker(data: any, path: any): any {
    if (typeof path == "string") {
      return this.dataSeeker(data, path.split("."));
    } else if (path.length == 0) {
      return data;
    } else {
      if (data) {
        return this.dataSeeker(data[path[0]], path.slice(1));
      } else {
        return undefined;
      }
    }
  }
}
