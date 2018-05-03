import { map } from 'rxjs/operators/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Drill } from './../shared/model/drill';
import { Injectable, Injector, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '@firebase/auth-types';

@Injectable()
export class DrillsService {
  private publicDrillsCollection: AngularFirestoreCollection<Drill>;
  private privateDrillsCollection: AngularFirestoreCollection<User>;
  private drills: BehaviorSubject<Drill[]> = new BehaviorSubject<Drill[]>([]);

  constructor(private injector: Injector, private ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.publicDrillsCollection = injector.get(AngularFirestore).collection<Drill>('pubDrills');
      this.publicDrillsCollection.snapshotChanges().subscribe(actions => {
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

  createDrill(drill: {drill: Drill, public: boolean}): Observable<any> {
    if(drill.public) {
      return fromPromise(this.publicDrillsCollection.add(drill.drill));
    } else {
      return fromPromise(this.privateDrillsCollection.doc('').collection<Drill>('pubDrills').add(drill.drill));
    }
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
