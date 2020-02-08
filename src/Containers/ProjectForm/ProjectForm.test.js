import React from 'react';
import { shallow } from 'enzyme';
import { ProjectForm, mapDispatchToProps } from './ProjectForm';
import { addProject } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('ProjectForm', () => {

  let mockProps, setup

  beforeEach(() => {

    mockProps = {
      addProject: jest.fn()
    }

    setup = () => {
      const utils = render(<ProjectForm 
        addProject={mockProps.addProject}
      />)
      const input = utils.getByLabelText('name-project-input')
      const btn = utils.getByRole('button')
      return {
        input,
        btn,
        ...utils,
      }
    }
  });

  test('should match the snapshot', () => {
    const { utils } = setup();

    expect(utils).toMatchSnapshot();
  });

  test("should load with initial state of '' in the add project input", () => {
    const { input } = setup();
    const inputValue = input;

    expect(inputValue.textContent).toBe('');
  });
  
  test('should allow a user to input a name', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'New Project Name'} });

    expect(input.value).toBe('New Project Name')
  });

  test('should reset the input when button is clicked', () => {
    const { input, btn } = setup();
    const inputValue = input;
    fireEvent.change(inputValue, { target: { value: 'New Project Name'} });
    fireEvent.click(btn);

    expect(inputValue.textContent).toBe('')
  });

});