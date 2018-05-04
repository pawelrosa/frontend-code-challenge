import React from "react";
import { mount } from "enzyme";
import { spy } from "sinon";
import { CreatePerson } from "../../../containers/CreatePerson";

let state = {
  errors: {},
  params: {
    email: '',
    name: '',
  },
  selectedTeams: [],
};

const buildComponent = (props = {}) => {
  return mount(<CreatePerson {...props} />);
};

let wrapper = buildComponent();

describe('<CreatePerson />', () => {
  it('defines CreatePerson instance', () => {
    expect(wrapper.instance() instanceof CreatePerson).toBeTruthy();
  });

  it('renders a form', () => {
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('has initial state', () => {
    const { errors, params, selectedTeams } = wrapper.state();

    expect(errors).toEqual(state.errors);
    expect(params).toEqual(state.params);
    expect(selectedTeams).toEqual(state.selectedTeams);
  });

  describe('_handleChange', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = buildComponent();
    });

    it('sets value of `Email` input to state', () => {
      const event = {
        target: {
          name: 'email',
          value: 'test@example.com',
        },
      };

      wrapper.instance()._handleChange(event);

      expect(wrapper.state().params.email).toEqual(event.target.value);
    });

    it('sets value of `Name` input to state', () => {
      const event = {
        target: {
          name: 'name',
          value: 'John Smith',
        },
      };

      wrapper.instance()._handleChange(event);

      expect(wrapper.state().params.name).toEqual(event.target.value);
    });
  });

  describe('_handleSelect', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = buildComponent();
    });

    it('sets value of `Teams` select to state', () => {
      const event = [
        {
          label: 'Team A',
          value: 1,
        }
      ];

      wrapper.instance()._handleSelect(event);

      expect(wrapper.state().selectedTeams).toEqual(event);
    });
  });

  describe('_validatePresence', () => {
    describe('when value is present', () => {
      it('returns `true`', () => {
        expect(wrapper.instance()._validatePresence('John Smith')).toBeTruthy();
      });
    });

    describe('when value is not present', () => {
      it('returns `false`', () => {
        expect(wrapper.instance()._validatePresence()).toBeFalsy();
        expect(wrapper.instance()._validatePresence({})).toBeFalsy();
        expect(wrapper.instance()._validatePresence([])).toBeFalsy();
        expect(wrapper.instance()._validatePresence(null)).toBeFalsy();
      });
    });
  });

  describe('_validatePattern', () => {
    let pattern;

    beforeEach(() => {
      pattern = /\d{2}-\d{3}/;
    });

    describe('when a pattern is matched', () => {
      it('returns `true`', () => {
        expect(wrapper.instance()._validatePattern('44-555', pattern)).toBeTruthy();
      });
    });

    describe('when a pattern is not matched', () => {
      it('returns `false`', () => {
        expect(wrapper.instance()._validatePattern('44555', pattern)).toBeFalsy();
        expect(wrapper.instance()._validatePattern('aa-bbb', pattern)).toBeFalsy();
      });
    });
  });

  describe('_validateEmail', () => {
    describe('when an email is valid', () => {
      it('returns `true`', () => {
        expect(wrapper.instance()._validateEmail('test@example.com')).toBeTruthy();
      });
    });

    describe('when an email is invalid', () => {
      it('returns `false`', () => {
        expect(wrapper.instance()._validateEmail('test@example')).toBeFalsy();
        expect(wrapper.instance()._validateEmail('@example.com')).toBeFalsy();
        expect(wrapper.instance()._validateEmail('test.example.com')).toBeFalsy();
      });
    });
  });

  describe('_getTeamsWithLimits', () => {
    it('gets teams which reached their members limit', () => {
      const teams = [
        {
          name: 'Team A',
          membersLimit: 2,
          members: [1, 2],
        },
        {
          name: 'Team B',
          membersLimit: 4,
          members: [1, 2, 3],
        },
      ];

      expect(wrapper.instance()._getTeamsWithLimits(teams)).toEqual([teams[0]]);
    });
  });

  describe('_validateParams', () => {
    let params;

    beforeEach(() => {
      params = {
        email: 'test@example.com',
        name: 'John Smith',
      };
    });

    describe('when a name is not present', () => {
      let mockedParams;
      let result;
      let wrapper;

      beforeEach(() => {
        wrapper = buildComponent();
        mockedParams = {
          ...params,
          name: '',
        };

        result = wrapper.instance()._validateParams(mockedParams);
      });

      it('sets proper error message to state', () => {
        expect(wrapper.state().errors.name).toEqual('Name cannot be blank.');
      });

      it('returns `false`', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when an email is not present', () => {
      let mockedParams;
      let result;

      beforeEach(() => {
        mockedParams = {
          ...params,
          email: '',
        };

        result = wrapper.instance()._validateParams(mockedParams);
      });

      it('sets proper error message to state', () => {
        expect(wrapper.state().errors.email).toEqual('Email cannot be blank.');
      });

      it('returns `false`', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when an email is invalid', () => {
      let mockedParams;
      let result;

      beforeEach(() => {
        mockedParams = {
          ...params,
          email: 'test.example.com',
        };

        result = wrapper.instance()._validateParams(mockedParams);
      });

      it('sets proper error message to state', () => {
        expect(wrapper.state().errors.email).toEqual('Email is invalid.');
      });

      it('returns `false`', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when selected teams reached their members limit', () => {
      let result;
      let wrapper;

      beforeEach(() => {
        wrapper = buildComponent();
        const selectedTeams = [
          {
            label: 'Team A',
            membersLimit: 2,
            members: [1, 2],
          },
          {
            label: 'Team B',
            membersLimit: 4,
            members: [1, 2, 3],
          },
        ];

        wrapper.setState({ selectedTeams });
        result = wrapper.instance()._validateParams(params);
      });

      it('sets proper error message to state', () => {
        expect(wrapper.state().errors.teams).toEqual('Teams: Team A have reached members limit.');
      });

      it('returns `false`', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when there are no selected teams', () => {
      let result;

      beforeEach(() => {
        result = wrapper.instance()._validateParams(params);
      });

      it('sets proper error message to state', () => {
        expect(wrapper.state().errors.teams).toEqual('Select at least one team.');
      });

      it('returns `false`', () => {
        expect(result).toBeFalsy();
      });
    });

    describe('when params are valid', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = buildComponent();
      });

      it('returns `true`', () => {
        const selectedTeams = [
          {
            label: 'Team B',
            membersLimit: 4,
            members: [1, 2, 3],
          },
        ];

        wrapper.setState({ selectedTeams });
        expect(wrapper.instance()._validateParams(params)).toBeTruthy();
      });
    });
  });

  describe('_handleSubmit', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        people: [],
        createPerson: spy(),
        addMember: spy(),
        activeTab: spy(),
      };
      wrapper = buildComponent(props);
      wrapper.setState({
        params: {
          email: 'test@example.com',
          name: 'John Smith',
        },
        selectedTeams: [
          {
            label: 'Team A',
            membersLimit: 2,
            members: [1],
            value: 1,
          },
          {
            label: 'Team B',
            membersLimit: 4,
            members: [1, 2, 3],
            value: 2,
          },
        ],
      });
      wrapper.instance()._handleSubmit(new Event('submit'));
    });

    it('calls createPerson()', () => {
      const person = {
        email: 'test@example.com',
        name: 'John Smith',
        id: 1,
        teams: [
          {
            name: 'Team A',
            id: 1,
          },
          {
            name: 'Team B',
            id: 2,
          },
        ],
      };
      expect(wrapper.props().createPerson.withArgs(person).calledOnce).toBeTruthy();
    });

    it('calls addMember() for each team', () => {
      const person = {
        email: 'test@example.com',
        name: 'John Smith',
        id: 1,
        teams: [
          {
            name: 'Team A',
            id: 1,
          },
          {
            name: 'Team B',
            id: 2,
          },
        ],
      };
      expect(wrapper.props().addMember.withArgs(1, person).calledOnce).toBeTruthy();
      expect(wrapper.props().addMember.withArgs(2, person).calledOnce).toBeTruthy();
    });

    it('calls activeTab()', () => {
      expect(wrapper.props().activeTab.withArgs(1).calledOnce).toBeTruthy();
    });

    it('sets state to its initial values', () => {
      expect(wrapper.state()).toEqual(state);
    });
  });
});
