import { AppState } from './app.state';
import { Action } from '@ngrx/store';

export const OPEN_NEW_DRILL_FORM = 'OPEN NEW DRILL FORM';
export const CLOSE_NEW_DRILL_FORM = 'CLOSE NEW DRILL FORM';

const DEFAULT_STATE = {
  layout: {
    showNewDrillForm: false
  }
};

export function layoutReducer(state: AppState = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case OPEN_NEW_DRILL_FORM:
      return { ...state, layout: { showNewDrillForm: true } };

    case CLOSE_NEW_DRILL_FORM:
      return { ...state, layout: { showNewDrillForm: false } };

    default:
      return state;
  }
}
