import { DrillsStoreService } from './../store/drills-store.service';
import { Observable } from 'rxjs/Observable';
import { Drill } from '@app/shared/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './drill-details.container.html',
  styleUrls: ['./drill-details.container.scss']
})
export class DrillDetailsContainer implements OnInit {
  drill$: Observable<Drill>;

  constructor(private route: ActivatedRoute, private storeService: DrillsStoreService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.storeService.dispatchOpenDrillAction(params.get('id'));
    });
    this.drill$ = this.storeService.getDrillDetails();
  }

  ngOnInit() {}
}
