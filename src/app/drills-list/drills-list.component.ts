import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-drills-list',
  templateUrl: 'drills-list.component.html',
  styleUrls: ['drills-list.component.scss']
})
export class DrillsListComponent implements OnInit {
  drillsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.drillsObservable = this.getDrills('/drills');
  }
  getDrills(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
