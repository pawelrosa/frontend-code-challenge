import { TEAM_ACTIONS} from "../constants/actions";

export const createTeam = (params) => ({
  type: TEAM_ACTIONS.CREATE_TEAM,
  params,
});

export const deleteTeam = (id) => ({
  type: TEAM_ACTIONS.DELETE_TEAM,
  id,
});

export const addMember = (id, member) => ({
  type: TEAM_ACTIONS.ADD_MEMBER,
  id,
  member,
});
