import { TEAM_ACTIONS } from "../constants/actions";
import { find, map, without } from "lodash";

const INITIAL_STATE = [
  {
    id: 1,
    name: 'Team A',
    membersLimit: 12,
    members: [
      {
        id: 1,
        name: 'Brian P. Rollins',
        email: 'brianprollins@armyspy.com',
      },
      {
        id: 2,
        name: 'Louise Godfrey',
        email: 'louisegodfrey@teleworm.us',
      },
    ]
  },
  {
    id: 2,
    name: 'Team B',
    membersLimit: 4,
    members: [
      {
        id: 3,
        name: 'Alicia Rees',
        email: 'aliciarees@jourrapide.com',
      },
      {
        id: 4,
        name: 'Robert Hale',
        email: 'roberthale@dayrep.com',
      },
      {
        id: 5,
        name: 'Charlotte Norris',
        email: 'charlottenorris@rhyta.com',
      },
    ]
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_ACTIONS.CREATE_TEAM:
      return [
        ...state,
        action.params,
      ];

    case TEAM_ACTIONS.DELETE_TEAM:
      return without(state, find(state, ['id', action.id]));

    case TEAM_ACTIONS.ADD_MEMBER:
      return map(state, (item) => {
        if (item.id !== action.id) { return item; }

        return {
          ...item,
          members: [
            ...item.members,
            action.member
          ],
        }
      });

    default:
      return state
  }
}
