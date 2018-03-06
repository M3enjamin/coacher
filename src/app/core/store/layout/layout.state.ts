export interface LayoutState {
  showNewDrillForm: boolean;
}

export const getNewDrillFormState = (state: LayoutState) => state.showNewDrillForm;
