import React from 'react';
import { shallow } from 'enzyme';
import { ProjectForm, mapStateToProps, mapDispatchToProps } from './ProjectForm';
import { addProject } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('ProjectForm', () => {

  let mockProps, setup

  beforeEach(() => {

    mockProps = {
      addProject: jest.fn(),
      currentPalette: [
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'}]
    }

    setup = () => {
      const wrapper = render(<ProjectForm
        addProject={mockProps.addProject}
        currentPalette={mockProps.currentPalette}
      />)
      const input = wrapper.getByLabelText('name-project-input')
      const btn = wrapper.getByRole('button')
      const error = wrapper.getByTestId('form-error')
      return {
        input,
        btn,
        error,
        ...wrapper
      }
    }
  });

  describe('ProjectForm Component', () => {

    test('should match the snapshot', () => {
      const { wrapper } = setup();

      expect(wrapper).toMatchSnapshot();
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

    test('should run setError and display errorif button is pushed with nothing in inputs', () => {
      const { btn, error, wrapper, input } = setup();

      fireEvent.click(btn);

      expect(error.hidden).toEqual(false);
      expect(input.textContent).toBe('');
    });

  })

  describe('mapDispatchToProps', () => {

    test('should call mapDispatch with a name when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addProject({ name: 'Rick' });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProject({ name: 'Rick' });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with the currentPalette data', () => {
      const mockState = {
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}],
        projects: []
      };
      const expected = {
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
