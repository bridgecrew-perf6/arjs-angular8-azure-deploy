import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ActiveReportsModule } from "@grapecity/activereports-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ActiveReportsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
