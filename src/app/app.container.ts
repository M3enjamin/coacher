import { Component, ViewEncapsulation } from "@angular/core";
import { LayoutStoreService } from "@core/store/layout/layout-store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.container.html",
  styleUrls: ["./app.container.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppContainer {
  constructor(private layoutStoreService: LayoutStoreService) {}

  openNewDrillForm() {
    this.layoutStoreService.dispatchOpenNewDrillForm();
  }
}
