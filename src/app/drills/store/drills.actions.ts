import { NgRxAction } from "@core/store/ngrx-action";
import { Drill } from "@shared/model";
import { Action } from "@ngrx/store";

export const LOAD_DRILLS = "[Drills] Load All Drills";
export const LOAD_DRILLS_SUCCESS = "[Drills] Load Drills Success";
export const LOAD_DRILLS_FAILURE = "[Drills] Load Drills Failure";
export const CREATE_DRILL = "[Drill] Create Drill";
export const CREATE_DRILL_SUCCESS = "[Drill] Create Drill Success";
export const CREATE_DRILL_FAILURE = "[Drill] Create Drill Failure";
export const DELETE_DRILL = "[Drill] Delete Drill";
export const DELETE_DRILL_SUCCESS = "[Drill] Delete Drill Success";
export const DELETE_DRILL_FAILURE = "[Drill] Delete Drill Failure";
export const OPEN_DRILL = "[Drill] Open Drill";
export const OPEN_DRILL_SUCCESS = "[Drill] Open Drill Success";
export const OPEN_DRILL_FAILURE = "[Drill] Open Drill Failure";

export class LoadDrills implements Action {
  readonly type = LOAD_DRILLS;
}

export class LoadDrillsSuccess extends NgRxAction<Drill[]> {
  readonly type = LOAD_DRILLS_SUCCESS;
}

export class LoadDrillsFailure extends NgRxAction<any> {
  readonly type = LOAD_DRILLS_FAILURE;
}

export class CreateDrill extends NgRxAction<Drill> {
  readonly type = CREATE_DRILL;
}

export class CreateDrillSuccess extends NgRxAction<Drill> {
  readonly type = CREATE_DRILL_SUCCESS;
}

export class CreateDrillFailure extends NgRxAction<any> {
  readonly type = CREATE_DRILL_FAILURE;
}

export class DeleteDrill extends NgRxAction<Drill> {
  readonly type = DELETE_DRILL;
}

export class DeleteDrillSuccess extends NgRxAction<Drill> {
  readonly type = DELETE_DRILL_SUCCESS;
}

export class DeleteDrillFailure extends NgRxAction<any> {
  readonly type = DELETE_DRILL_FAILURE;
}

export class OpenDrill extends NgRxAction<string> {
  readonly type = OPEN_DRILL;
}

export class OpenDrillSuccess extends NgRxAction<any> {
  readonly type = OPEN_DRILL_SUCCESS;
}

export class OpenDrillFailure extends NgRxAction<any> {
  readonly type = OPEN_DRILL_FAILURE;
}

export type DrillsActions =
  | CreateDrill
  | CreateDrillSuccess
  | OpenDrill
  | OpenDrillSuccess
  | OpenDrillFailure
  | DeleteDrill
  | DeleteDrillSuccess
  | DeleteDrillFailure
  | LoadDrills
  | LoadDrillsSuccess
  | LoadDrillsFailure;
