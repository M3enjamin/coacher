import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { LayoutState } from "./layout/layout.state";
import { environment } from "./../../../environments/environment";
import { RouterStateUrl } from "./utils";
import * as fromLayout from "./layout/layout.reducer";

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  layout: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  layout: fromLayout.layoutReducer
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
