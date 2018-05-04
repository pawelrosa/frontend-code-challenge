import React, { Component } from "react";
import { connect } from "react-redux";
import { activeTab } from "../../actions/tabs_action_creators";
import { createTeam } from "../../actions/teams_action_creators";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { get, isEmpty, maxBy } from "lodash";

const INITIAL_STATE = {
  errors: {},
  params: {
    membersLimit: 1,
    members: [],
    name: '',
  },
};
const MEMBERS_MIN = 1;
const MEMBERS_MAX = 20;

class CreateTeam extends Component {
  state = INITIAL_STATE;

  _handleChange = ({ target }) => {
    const params = {
      ...this.state.params,
      [target.name]: target.value,
    };

    this.setState({ params });
  };

  _handleCounterChange = (valueAsNumber, valueAsString, target) => {
    const params = {
      ...this.state.params,
      [target.name]: valueAsNumber,
    };

    this.setState({ params });
  };

  _validatePresence = (value) =>
    !isEmpty(value);

  _validateMembersLimit = (value) =>
    value >= MEMBERS_MIN && value <= MEMBERS_MAX;

  _validateParams = (params) => {
    const { membersLimit, name } = params;
    let errors = {};

    if (!this._validatePresence(name)) {
      errors = {
        ...errors,
        name: 'Name cannot be blank.',
      }
    }

    if (!this._validateMembersLimit(membersLimit)) {
      errors = {
        ...errors,
        membersLimit: `Members limit should be a number from ${MEMBERS_MIN} to ${MEMBERS_MAX}.`,
      }
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    const { activeTab, createTeam, teams } = this.props;
    const { params } = this.state;

    if (this._validateParams(params)) {
      createTeam({
        ...params,
        id: get(maxBy(teams, 'id'), 'id', 0) + 1,
      });
      activeTab(0);

      this.setState(INITIAL_STATE);
    }
  };

  render() {
    const { errors, params } = this.state;

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
          placeholder="Team Name"
          type="text"
          value={params.name}
        />
        <Input
          error={errors.membersLimit}
          label="Members Limit"
          min={MEMBERS_MIN}
          max={MEMBERS_MAX}
          name="membersLimit"
          onChange={this._handleCounterChange}
          type="number"
          value={params.membersLimit}
        />
        <Button type="submit">
          Create Team
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ teams }) => ({
  teams,
});

const mapDispatchToProps = {
  activeTab,
  createTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);

