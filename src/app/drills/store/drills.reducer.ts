import { initialState } from './drills.state';
import { DrillsState } from './drills.state';
import { Drill } from '@app/shared/model';
import {
  LOAD_DRILLS,
  DrillsActions,
  LOAD_DRILLS_SUCCESS,
  CREATE_DRILL_SUCCESS,
  DELETE_DRILL_SUCCESS,
  OPEN_DRILL_SUCCESS
} from './drills.actions';
import cloneDeep from 'lodash-es/cloneDeep';

export function reducer(state = initialState, action: DrillsActions): DrillsState {
  switch (action.type) {
    case LOAD_DRILLS_SUCCESS: {
      return cloneDeep(state);
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
