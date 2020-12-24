import { Component, ViewChild } from "@angular/core";
import {
  AR_EXPORTS,
  HtmlExportService,
  PdfExportService,
  ViewerComponent,
  XlsxExportService,
} from "@grapecity/activereports-angular";

@Component({
  selector: "app-root",
  template:
    '<div id="viewer-host"><gc-activereports-viewer (init)="onViewerInit()"> </gc-activereports-viewer></div> ',
  styleUrls: ["./app.component.scss"],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: XlsxExportService,
      multi: true,
    },
  ],
})
export class AppComponent {
  @ViewChild(ViewerComponent, { static: false }) reportViewer: ViewerComponent;
  onViewerInit() {
    this.reportViewer.open("assets/report.rdlx-json");
  }
}
