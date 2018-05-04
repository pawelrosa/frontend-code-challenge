import React, { Component } from "react";
import Box, { Body, Header, Headline } from "../../components/Box";
import Teams from "../Teams";
import People from "../People";
import Tabs from "../../components/Tabs";
import { connect } from "react-redux";
import { activeTab } from "../../actions/tabs_action_creators";
import CreatePerson from "../CreatePerson";
import CreateTeam from "../CreateTeam";

class App extends Component {
  render() {
    const { activeTab, activeTabIndex } = this.props;

    return (
      <div className="main-container container">
        <div className="row">
          <main className="col-lg-8">
            <Box>
              <Tabs
                activeTab={activeTab}
                activeTabIndex={activeTabIndex}
                collection={[
                  {
                    content: <Teams/>,
                    name: 'Teams',
                    version: 'purple',
                  },
                  {
                    content: <People />,
                    name: 'People',
                    version: 'orange',
                  }
                ]}
              />
            </Box>
          </main>
          <aside className="col-lg-4">
            <Box>
              <Header version="purple">
                <Headline>Create Team</Headline>
              </Header>
              <Body>
                <CreateTeam />
              </Body>
            </Box>
            <Box>
              <Header version="orange">
                <Headline>Create Person</Headline>
              </Header>
              <Body>
                <CreatePerson />
              </Body>
            </Box>
          </aside>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeTabIndex }) => ({
  activeTabIndex,
});

const mapDispatchToProps = {
  activeTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App };
