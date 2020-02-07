import React from 'react';
import { shallow } from 'enzyme';
import { ProjectForm, mapDispatchToProps } from './ProjectForm';
import { addProject } from '../../actions/index';

describe('ProjectForm', () => {

    let wrapper, mockProps

    beforeEach(() => {
      mockProps = {
        addProject: jest.fn()
      }
      wrapper = shallow(<ProjectForm 
        addProject={mockProps.addProject}
      />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

});