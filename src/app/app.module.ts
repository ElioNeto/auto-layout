import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreComponent } from "./core/core.component";
import { PageComponent } from "./shared/components/page/page.component";
import { SectionComponent } from "./shared/components/section/section.component";
import { OrchestratorComponent } from "./shared/components/orchestrator/orchestrator.component";

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    PageComponent,
    SectionComponent,
    OrchestratorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
