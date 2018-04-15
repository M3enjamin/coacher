import { Drill } from "@shared/model";

export interface DrillsState {
  list: Drill[];
  drill: Drill;
}

export const initialState: DrillsState = {
  list: [],
  drill: undefined
};

export const getDrills = (state: DrillsState) => state.list;
export const getDrill = (state: DrillsState) => state.drill;
