import { Drill } from '@shared/model';
import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import * as state from './drills.state';
import * as drills from './drills.actions';

import { StoreService } from '@app/store/app-store.service';
import { AppState } from '@app/store/app.reducer';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';

@Injectable()
export class DrillsStoreService extends StoreService {
  private drillsState = createFeatureSelector<state.DrillsState>('drills');

  private drills = createSelector(this.drillsState, state.getDrills);
  private drill = createSelector(this.drillsState, state.getDrill);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchLoadDrillsAction() {
    this.dispatchAction(new drills.LoadDrills());
  }

  dispatchOpenDrillAction(drillId: string) {
    this.dispatchAction(new drills.OpenDrill(drillId));
  }

  dispatchCreateDrillAction(drill: Drill) {
    this.dispatchAction(new drills.CreateDrill(drill));
  }

  dispatchDeleteDrillAction(drill: Drill) {
    this.dispatchAction(new drills.DeleteDrill(drill));
  }

  getDrillDetails(): Observable<Drill> {
    return this.store.select(this.drill);
  }
}
