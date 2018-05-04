import { PEOPLE_ACTIONS} from "../constants/actions";

export const createPerson = (params) => ({
  type: PEOPLE_ACTIONS.CREATE_PERSON,
  params,
});

export const deletePerson = (id) => ({
  type: PEOPLE_ACTIONS.DELETE_PERSON,
  id,
});
