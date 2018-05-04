import { each, filter, get, isEmpty, join, map, maxBy, size } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { activeTab } from "../../actions/tabs_action_creators";
import { createPerson } from "../../actions/people_action_creators";
import { addMember } from "../../actions/teams_action_creators";
import Button from "../../components/Button";
import Input from "../../components/Input";

const INITIAL_STATE = {
  errors: {},
  params: {
    email: '',
    name: '',
  },
  selectedTeams: [],
};
const EMAIL_REGEXP = /\S+@\S+\.\S+/;

class CreatePerson extends Component {
  state = INITIAL_STATE;

  _handleChange = ({ target }) => {
    const params = {
      ...this.state.params,
      [target.name]: target.value,
    };

    this.setState({ params });
  };

  _handleSelect = (selectedTeams) => {
    this.setState({ selectedTeams });
  };

  _validatePresence = (value) =>
    !isEmpty(value);

  _validatePattern = (value, pattern) => {
    if (!pattern || isEmpty(value)) { return false; }

    return pattern.test(String(value));
  };

  _validateEmail = (value) =>
    this._validatePattern(value, EMAIL_REGEXP);

  _getTeamsWithLimits = (teams) =>
    filter(teams, (team) => {
      return size(team.members) === team.membersLimit;
    });

  _validateParams = (params) => {
    const { email, name } = params;
    const { selectedTeams } = this.state;
    const teamsWithLimits = this._getTeamsWithLimits(selectedTeams);

    let errors = {};

    if (!this._validatePresence(name)) {
      errors = {
        ...errors,
        name: 'Name cannot be blank.',
      }
    }

    if (!this._validateEmail(email)) {
      errors = {
        ...errors,
        email: 'Email is invalid.',
      }
    }

    if (!this._validatePresence(email)) {
      errors = {
        ...errors,
        email: 'Email cannot be blank.',
      }
    }

    if (!isEmpty(teamsWithLimits)) {
      const teamNames = join(map(teamsWithLimits, 'label'), ', ');

      errors = {
        ...errors,
        teams: `Teams: ${teamNames} have reached members limit.`,
      }
    }

    if (!this._validatePresence(selectedTeams)) {
      errors = {
        ...errors,
        teams: 'Select at least one team.',
      }
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    const { activeTab, addMember, createPerson, people } = this.props;
    const { params, selectedTeams } = this.state;

    if (this._validateParams(params)) {
      const teams = map(selectedTeams, ({ label, value }) => ({ id: value, name: label }));
      const id = get(maxBy(people, 'id'), 'id', 0) + 1;
      const person = {
        ...params,
        id,
        teams,
      };

      createPerson(person);

      each(teams, (team) => addMember(team.id, person));

      activeTab(1);

      this.setState(INITIAL_STATE);
    }
  };

  _prepareTeamsOptions = () => {
    const { teams } = this.props;

    return map(teams, ({ id, name, ...rest }) => ({ label: name, value: id, ...rest }));
  };

  render() {
    const { teams } = this.props;
    const { errors, params, selectedTeams } = this.state;
    const isSubmitDisabled = isEmpty(teams);

    return (
      <form
        noValidate
        onSubmit={this._handleSubmit}
      >
        <Input
          error={errors.name}
          label="Name"
          name="name"
          onChange={this._handleChange}
          placeholder="Person Name"
          type="text"
          value={params.name}
        />
        <Input
          error={errors.email}
          label="Email"
          name="email"
          onChange={this._handleChange}
          placeholder="Person Email"
          type="email"
          value={params.email}
        />
        <Input
          error={errors.teams}
          label="Teams"
          name="teams"
          multi
          value={selectedTeams}
          onChange={this._handleSelect}
          options={this._prepareTeamsOptions()}
          type="select"
        />
        <Button
          disabled={isSubmitDisabled}
          type="submit"
          version="orange"
        >
          Create Person
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ people, teams }) => ({
  people,
  teams,
});

const mapDispatchToProps = {
  activeTab,
  addMember,
  createPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePerson);
export { CreatePerson };

