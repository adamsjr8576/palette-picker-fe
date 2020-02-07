import React from 'react';
import { shallow } from 'enzyme';
import { ProjectForm, mapDispatchToProps } from './ProjectForm';
import { addProject } from '../../actions/index';
import { render, getByTestId, fireEvent } from '@testing-library/react';

describe('ProjectForm', () => {

  let wrapper, mockProps, setup

  beforeEach(() => {

    setup = () => {
      const utils = render(<ProjectForm />)
      const input = utils.getByLabelText('name-project-input')
      return {
        input,
        ...utils,
      }
    }

    mockProps = {
      addProject: jest.fn()
    }

    wrapper = shallow(<ProjectForm 
      addProject={mockProps.addProject}
    />)
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test("should load with initial state of '' in the add project input", () => {
    const { input } = setup();
    const inputValue = input

    expect(inputValue.textContent).toBe('');
  });
  
  test('should allow a user to input a name', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'New Project Name'} });

    expect(input.value).toBe('New Project Name')
  });

});