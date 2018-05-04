import { TABS_ACTIONS } from "../constants/actions";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABS_ACTIONS.ACTIVE_TAB:
      return action.index;
    default:
      return state;
  }
}
