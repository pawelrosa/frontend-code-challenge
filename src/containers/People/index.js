import React, { Component } from "react";
import { connect } from "react-redux";
import { PersonCard } from "../../components/Card";
import { deletePerson } from "../../actions/people_action_creators";
import ZeroState from "../../components/ZeroState";
import { isEmpty } from "lodash";

class People extends Component {
  _handleDelete = (id) => {
    this.props.deletePerson(id);
  };

  render() {
    const { collection } = this.props;

    if (isEmpty(collection)) {
      return <ZeroState message="No person has been created." />;
    }

    return (
      <div style={{ padding: '0 20px' }}>
        {collection.map(({ id, email, name, teams }) => (
          <PersonCard
            email={email}
            key={id}
            id={id}
            name={name}
            onDelete={this._handleDelete}
            teams={teams}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  collection: state.people,
});

const mapDispatchToProps = {
  deletePerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
