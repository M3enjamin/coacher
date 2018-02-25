import { Component, OnInit } from '@angular/core';
import { Drill, Aspect } from '@app/shared/model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-drills',
  template: `
  <app-drills-list [drills]="drills | async"></app-drills-list>
  `
})
export class DrillsContainer {
  private drillCollection: AngularFirestoreCollection<Drill>;
  private aspectCollection: AngularFirestoreCollection<Aspect>;
  drills: Observable<Drill[]>;
  aspects: Observable<Aspect[]>;

  constructor(private afs: AngularFirestore) {
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
  }

  createDrill(drill: Drill) {
    this.drillCollection.add(drill);
  }

  removeDrill(drill: Drill) {
    this.afs.doc('drills/' + drill.id).delete();
  }
}
