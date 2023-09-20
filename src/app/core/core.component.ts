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
  objParsed: any;

  currentPage: number = 1;
  totalPages: number | undefined;

  usemock: boolean = false;

  userId: string = "user00001";

  constructor(private core: CoreService) {}
  ngOnInit(): void {
    if (!this.usemock) {
      setTimeout(() => {
        this.core.getData().subscribe((data: any) => {
          this.layout = {};
          this.layout.pages = data;
          console.log(data);

          this.totalPages = this.layout.pages.length;
        });
      }, 500);
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
}
