import { Action } from "@ngrx/store";

export const OPEN_NEW_DRILL_FORM = "[Layout] Open New Drill Form";
export const CLOSE_NEW_DRILL_FORM = "[Layout] Close New Drill Form";

export class OpenNewDrillForm implements Action {
  readonly type = OPEN_NEW_DRILL_FORM;
}

export class CloseNewDrillForm implements Action {
  readonly type = CLOSE_NEW_DRILL_FORM;
}

export type DrillsActions = OpenNewDrillForm | CloseNewDrillForm;
