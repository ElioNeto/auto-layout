import { Component, OnInit } from "@angular/core";
import { CoreService } from "../shared/services/core.service";

@Component({
  selector: "app-core",
  templateUrl: "./core.component.html",
  styleUrls: ["./core.component.css"],
})
export class CoreComponent implements OnInit {
  layout: any = {};

  currentPage: number = 1;
  totalPages: number = 2; //this.layout.pages.length;

  usemock: boolean = false;

  constructor(private core: CoreService) {}
  ngOnInit(): void {
    if (!this.usemock) {
      this.core.getData().subscribe((data: any) => {
        this.layout.pages = data;
        this.totalPages = this.layout.pages.length;
      });
    } else {
    }
  }

  toNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  toPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
