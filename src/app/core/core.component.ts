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
        this.core.getData(this.userId).subscribe((data: any) => {
          this.data = data;
          this.core.getLayout(this.data.layoutId).subscribe((layout: any) => {
            this.layout = layout;
            this.totalPages = this.layout.pages.length;
          });
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
