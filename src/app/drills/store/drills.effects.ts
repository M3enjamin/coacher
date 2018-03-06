import { AppState } from './../../store/app.reducer';
import { DrillsService } from './../drills.service';
import {
  LoadDrills,
  LOAD_DRILLS,
  CreateDrill,
  CREATE_DRILL,
  CreateDrillFailure,
  CreateDrillSuccess,
  DeleteDrill,
  DELETE_DRILL,
  OpenDrill,
  OPEN_DRILL,
  DeleteDrillSuccess,
  DeleteDrillFailure,
  OpenDrillSuccess,
  OpenDrillFailure
} from './drills.actions';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class DrillsEffects {
  @Effect() loadDrills$: Observable<Action> = this.actions$.ofType<LoadDrills>(LOAD_DRILLS).pipe(switchMap(payload => undefined));

  @Effect()
  createDrill$: Observable<Action> = this.actions$
    .ofType<CreateDrill>(CREATE_DRILL)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.drillsService
          .createDrill(payload)
          .pipe(map(drill => new CreateDrillSuccess(drill)), catchError(error => of(new CreateDrillFailure(error))))
      )
    );

  @Effect()
  deleteDrill: Observable<Action> = this.actions$
    .ofType<DeleteDrill>(DELETE_DRILL)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.drillsService
          .deleteDrill(payload)
          .pipe(map(response => new DeleteDrillSuccess()), catchError(error => of(new DeleteDrillFailure(error))))
      )
    );

  @Effect()
  openDrill$: Observable<Action> = this.actions$.ofType<OpenDrill>(OPEN_DRILL).pipe(
    map(action => action.payload),
    switchMap(payload => {
      return this.drillsService
        .openDrill(payload)
        .pipe(map(drill => new OpenDrillSuccess(drill)), catchError(error => of(new OpenDrillFailure(error))));
    })
  );

  constructor(private state$: Store<AppState>, private actions$: Actions, private drillsService: DrillsService) {}
}
