import { LayoutState } from './layout.state';
import { Action } from '@ngrx/store';
import { CLOSE_NEW_DRILL_FORM, OPEN_NEW_DRILL_FORM } from './layout.actions';

const DEFAULT_STATE: LayoutState = {
  showNewDrillForm: false
};

export function layoutReducer(state: LayoutState = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case OPEN_NEW_DRILL_FORM:
      return { ...state, showNewDrillForm: true };

    case CLOSE_NEW_DRILL_FORM:
      return { ...state, showNewDrillForm: false };

    default:
      return state;
  }
}
