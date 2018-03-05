import { CLOSE_NEW_DRILL_FORM } from './../store/layout.reducer';
import { AppState } from './../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Drill, Aspect } from '@app/shared/model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators/map';

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

  constructor(private afs: AngularFirestore, private store: Store<AppState>) {
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
    this.showNewDrillForm = this.store.pipe(
      select('layout'),
      map(appState => {
        return appState['layout']['showNewDrillForm'];
      })
    );
  }

  createDrill(drill: Drill) {
    this.drillCollection.add(drill);
    this.store.dispatch({ type: CLOSE_NEW_DRILL_FORM });
  }

  cancelCreate() {
    this.store.dispatch({ type: CLOSE_NEW_DRILL_FORM });
  }

  removeDrill(drill: Drill) {
    this.afs.doc('drills/' + drill.id).delete();
  }
}
