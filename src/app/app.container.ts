import { LayoutStoreService } from '@core/store/layout/layout-store.service';
import { LayoutState } from './core/store/layout/layout.state';
import { Component, ViewEncapsulation } from '@angular/core';
import { Drill, Aspect } from './shared/model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppContainer {
  private drillCollection: AngularFirestoreCollection<Drill>;
  private aspectCollection: AngularFirestoreCollection<Aspect>;
  drills: Observable<Drill[]>;
  aspects: Observable<Aspect[]>;

  constructor(private afs: AngularFirestore, private layoutStoreService: LayoutStoreService) {
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

  openNewDrillForm() {
    this.layoutStoreService.dispatchOpenNewDrillForm();
  }
}
