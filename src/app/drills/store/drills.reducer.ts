import { DrillsState, initialState } from './drills.state';
import {
  CREATE_DRILL_SUCCESS,
  DELETE_DRILL_SUCCESS,
  DrillsActions,
  LOAD_DRILLS_SUCCESS,
  OPEN_DRILL_SUCCESS
} from './drills.actions';
import cloneDeep from 'lodash-es/cloneDeep';

export function reducer(state = initialState, action: DrillsActions): DrillsState {
  switch (action.type) {
    case LOAD_DRILLS_SUCCESS: {
      const newState = cloneDeep(state);
      newState.list = action.payload;
      return newState;
    }

    case CREATE_DRILL_SUCCESS: {
      return cloneDeep(state);
    }

    case DELETE_DRILL_SUCCESS: {
      return cloneDeep(state);
    }

    case OPEN_DRILL_SUCCESS: {
      return cloneDeep(state);
    }

    default: {
      return state;
    }
  }
}
