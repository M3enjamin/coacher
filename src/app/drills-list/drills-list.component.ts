import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Drill } from '../shared/model/drill';

@Component({
  selector: 'app-drills-list',
  templateUrl: 'drills-list.component.html',
  styleUrls: ['drills-list.component.scss']
})
export class DrillsListComponent {
  @Input() drills: Drill[];

  @Output() removeDrill: EventEmitter<Drill> = new EventEmitter();

  remove(drill: Drill) {
    this.removeDrill.emit(drill);
  }
}
