import { Component } from '@angular/core';
import { Drill } from './shared/model/drill';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private db: AngularFireDatabase) {}

  createDrill(drill: Drill) {
    this.db.object('drills/' + drill.title.replace(/\s/g, '')).set(drill);
  }
}
