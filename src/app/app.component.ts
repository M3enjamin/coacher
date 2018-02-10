import { Component } from '@angular/core';
import { Drill } from './shared/model/drill';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private collection: AngularFirestoreCollection<Drill>;
  drills: Observable<Drill[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection<Drill>('drills');
    this.drills = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Drill;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createDrill(drill: Drill) {
    this.collection.add(drill);
  }

  removeDrill(drill: Drill) {
    this.afs.doc('drills/' + drill.id).delete();
  }
}
