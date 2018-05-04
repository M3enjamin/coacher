import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drill } from '@shared/model';

@Component({
  selector: 'cchr-drills-list',
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
