import { Aspect } from './../shared/model/aspect';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Drill } from './../shared/model/drill';
import { Injectable } from '@angular/core';

@Injectable()
export class DrillsService {
  private drillCollection: AngularFirestoreCollection<Drill>;
  private drills: Observable<Drill[]>;

  constructor(private afs: AngularFirestore) {
    this.drillCollection = afs.collection<Drill>('drills');
    this.drills = this.drillCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Drill;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  loadDrills(): Observable<Drill[]> {
    return this.drills;
  }
  createDrill(drill: Drill): Observable<Drill> {
    this.drillCollection.add(drill);
    return undefined;
  }
  deleteDrill(drill: Drill): Observable<any> {
    this.afs.doc('drills/' + drill.id).delete();
    return undefined;
  }
  openDrill(drillId: string): Observable<Drill> {
    return undefined;
  }
}
