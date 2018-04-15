import { LayoutStoreService } from "./../../core/store/layout/layout-store.service";
import { DrillsStoreService } from "./../store/drills-store.service";
import { Component } from "@angular/core";
import { Drill } from "@app/shared/model";

import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: "app-drills",
  template: `
  <app-drill-form
    [formOpen]="showNewDrillForm | async"
    (createDrill)="createDrill($event)"
    (cancelCreate)="cancelCreate()"></app-drill-form>
  <app-drills-list
    [drills]="drills | async"
    (removeDrill)="removeDrill($event)"></app-drills-list>
  `
})
export class DrillsContainer {
  drills: Observable<Drill[]>;
  showNewDrillForm: Observable<boolean>;

  constructor(
    private router: Router,
    private drillStoreService: DrillsStoreService,
    private layoutStoreService: LayoutStoreService
  ) {
    this.drillStoreService.dispatchLoadDrillsAction();
    this.drills = this.drillStoreService.getDrills();
    this.showNewDrillForm = this.layoutStoreService.getNewDrillFormState();
  }

  createDrill(drill: Drill) {
    this.drillStoreService.dispatchCreateDrillAction(drill);
  }

  cancelCreate() {
    this.layoutStoreService.dispatchCloseNewDrillForm();
  }

  removeDrill(drill: Drill) {
    this.drillStoreService.dispatchDeleteDrillAction(drill);
  }
}
