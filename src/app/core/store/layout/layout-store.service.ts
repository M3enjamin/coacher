import { Drill } from '@shared/model';
import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import * as state from './layout.state';
import * as layout from './layout.actions';

import { StoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app.reducer';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';

@Injectable()
export class LayoutStoreService extends StoreService {
  private layoutState = createFeatureSelector<state.LayoutState>('layout');

  private newDrillFormState = createSelector(this.layoutState, state.getNewDrillFormState);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchOpenNewDrillForm() {
    this.dispatchAction(new layout.OpenNewDrillForm());
  }

  dispatchCloseNewDrillForm() {
    this.dispatchAction(new layout.CloseNewDrillForm());
  }

  getNewDrillFormState(): Observable<boolean> {
    return this.store.select(this.newDrillFormState);
  }
}
