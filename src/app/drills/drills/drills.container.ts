import { LayoutStoreService } from './../../core/store/layout/layout-store.service';
import { DrillsStoreService } from './../store/drills-store.service';
import { Component, OnInit } from '@angular/core';
import { Drill, Aspect } from '@app/shared/model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drills',
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
  private drillCollection: AngularFirestoreCollection<Drill>;
  private aspectCollection: AngularFirestoreCollection<Aspect>;
  drills: Observable<Drill[]>;
  aspects: Observable<Aspect[]>;
  showNewDrillForm: Observable<boolean>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private drillStoreService: DrillsStoreService,
    private layoutStoreService: LayoutStoreService
  ) {
    this.drillCollection = afs.collection<Drill>('drills');
    this.aspectCollection = afs.collection<Aspect>('aspects');
    this.drills = this.drillCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Drill;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.aspects = this.aspectCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Aspect;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.showNewDrillForm = this.layoutStoreService.getNewDrillFormState();
  }

  createDrill(drill: Drill) {
    this.drillCollection.add(drill);
    this.drillStoreService.dispatchCreateDrillAction(drill);
  }

  cancelCreate() {
    this.layoutStoreService.dispatchCloseNewDrillForm();
  }

  removeDrill(drill: Drill) {
    // this.afs.doc('drills/' + drill.id).delete();
    this.drillStoreService.dispatchDeleteDrillAction(drill);
  }
}
