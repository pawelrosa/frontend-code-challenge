import { combineReducers } from 'redux';
import teamsReducer from './teams_reducer';
import peopleReducer from "./people_reducer";
import tabsReducer from "./tabs_reducer";

export default combineReducers({
  people: peopleReducer,
  activeTabIndex: tabsReducer,
  teams: teamsReducer,
})
