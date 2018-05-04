import { PEOPLE_ACTIONS } from "../constants/actions";
import { find, without } from "lodash";

const INITIAL_STATE = [
  {
    id: 1,
    name: 'Brian P. Rollins',
    email: 'brianprollins@armyspy.com',
    teams: [
      { id: 1, name: 'Team A' },
      { id: 2, name: 'Team B' },
    ],
  },
  {
    id: 2,
    name: 'Louise Godfrey',
    email: 'louisegodfrey@teleworm.us',
    teams: [
      { id: 2,  name: 'Team B' },
    ],
  },
  {
    id: 3,
    name: 'Alicia Rees',
    email: 'aliciarees@jourrapide.com',
    teams: [
      { id: 1, name: 'Team A' },
      { id: 2, name: 'Team B' },
    ],
  },
  {
    id: 4,
    name: 'Robert Hale',
    email: 'roberthale@dayrep.com',
    teams: [
      { id: 2, name: 'Team B' },
    ],
  },
  {
    id: 5,
    name: 'Charlotte Norris',
    email: 'charlottenorris@rhyta.com',
    teams: [
      { id: 1, name: 'Team A' },
    ],
  },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEOPLE_ACTIONS.CREATE_PERSON:
      return [
        ...state,
        action.params,
      ];

    case PEOPLE_ACTIONS.DELETE_PERSON:
      return without(state, find(state, ['id', action.id]));

    default:
      return state
  }
}
