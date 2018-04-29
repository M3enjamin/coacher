import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Drill } from './../shared/model/drill';
import { Injectable, Injector, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DrillsService {
  private drillCollection: AngularFirestoreCollection<Drill>;
  private drills: BehaviorSubject<Drill[]> = new BehaviorSubject<Drill[]>([]);

  constructor(private injector: Injector, private ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.drillCollection = injector.get(AngularFirestore).collection<Drill>('drills');
      this.drillCollection.snapshotChanges().subscribe(actions => {
        this.ngZone.run(() => {
          this.drills.next(
            actions.map(a => {
              const data = a.payload.doc.data() as Drill;
              const id = a.payload.doc.id;
              return { id, ...data };
            })
          );
        });
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
    //   this.afs.doc('drills/' + drill.id).delete();
    //   return undefined;
    return undefined;
  }

  openDrill(drillId: string): Observable<Drill> {
    return undefined;
  }
}
