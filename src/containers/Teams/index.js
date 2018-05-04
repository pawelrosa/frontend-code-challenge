import { isEmpty } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTeam } from "../../actions/teams_action_creators";
import { TeamCard } from "../../components/Card";
import ZeroState from "../../components/ZeroState";

class Teams extends Component {
  _handleDelete = (id) => {
    this.props.deleteTeam(id);
  };

  render() {
    const { collection } = this.props;

    if (isEmpty(collection)) {
      return <ZeroState message="No team has been created." />;
    }

    return (
      <div style={{ padding: '0 20px' }}>
        {collection.map(({ id, members, membersLimit, name }) => (
          <TeamCard
            key={id}
            id={id}
            name={name}
            onDelete={this._handleDelete}
            members={members}
            membersLimit={membersLimit}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  collection: state.teams,
});

const mapDispatchToProps = {
  deleteTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
