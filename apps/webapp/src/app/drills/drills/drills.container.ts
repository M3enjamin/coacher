import { LayoutStoreService } from './../../core/store/layout/layout-store.service';
import { DrillsStoreService } from './../store/drills-store.service';
import { Component } from '@angular/core';
import { Drill } from '@app/shared/model';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'cchr-drills',
  template: `
  <cchr-new-drill-form
    [formOpen]="showNewDrillForm | async"
    (createDrill)="createDrill($event)"
    (cancelCreate)="cancelCreate()"></cchr-new-drill-form>
  <cchr-drills-list
    [drills]="drills | async"
    (removeDrill)="removeDrill($event)"></cchr-drills-list>
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

  createDrill(drill: { drill: Drill; public: boolean }) {
    this.drillStoreService.dispatchCreateDrillAction(drill);
  }

  cancelCreate() {
    this.layoutStoreService.dispatchCloseNewDrillForm();
  }

  removeDrill(drill: Drill) {
    this.drillStoreService.dispatchDeleteDrillAction(drill);
  }
}
