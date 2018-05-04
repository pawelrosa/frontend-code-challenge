import { TABS_ACTIONS} from "../constants/actions";

export const activeTab = (index) => ({
  type: TABS_ACTIONS.ACTIVE_TAB,
  index,
});
