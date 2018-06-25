import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '@app/core/services/auth.service';
import { User, Drill } from '@shared/model';
import { map } from 'rxjs/operators/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Injectable, Injector, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DrillsService {
  private userDrillsCollection: AngularFirestoreCollection<Drill>;
  private drills: BehaviorSubject<Drill[]> = new BehaviorSubject<Drill[]>([]);

  constructor(private _injector: Injector, private _ngZone: NgZone, private _auth: AngularFireAuth) {
    // const uid = this._auth.auth.currentUser.uid;
    // console.log(uid);
    // this._ngZone.runOutsideAngular(() => {
    //   this.userDrillsCollection = this._injector.get(AngularFirestore).collection<Drill>(`users/${uid}/drills`);
    //   this.userDrillsCollection.snapshotChanges().subscribe(actions => {
    //     this._ngZone.run(() => {
    //       this.drills.next(
    //         actions.map(a => {
    //           const data = a.payload.doc.data() as Drill;
    //           const id = a.payload.doc.id;
    //           return { id, ...data };
    //         })
    //       );
    //     });
    //   });
    // });
  }

  loadDrills(): Observable<Drill[]> {
    // return this.drills;
    return Observable.of([]);
  }

  createDrill(payload: { drill: Drill; public: boolean }): Observable<any> {
    if (payload.public) {
      return undefined;
    } else {
      return fromPromise(this.userDrillsCollection.add(payload.drill));
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
