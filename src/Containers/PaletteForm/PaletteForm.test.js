import React from 'react';
import { shallow } from 'enzyme';
import { PaletteForm, mapStateToProps, mapDispatchToProps } from './PaletteForm';
import { addPalettes } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('PaletteForm', () => {

  let mockProps, setup;

  beforeEach(() => {

    mockProps = {
      addPalettes: jest.fn(),
      projects: [{id: 1, name: "test hahahah", created_at: "2020-02-07T20:06:59.135Z", updated_at: "2020-02-07T20:06:59.135Z"},
        {id: 2, name: "test", created_at: "2020-02-07T20:06:59.135Z", updated_at: "2020-02-07T20:06:59.135Z"}],
      currentPalette: [
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'}]
    }

    setup = () => {
      const wrapper = render(<PaletteForm
        addPalettes={mockProps.addPalettes}
        projects={mockProps.projects}
        currentPalette={mockProps.currentPalette}
      />);
      const select = wrapper.getByTestId('select-project')
      const input = wrapper.getByTestId('palette-name-input')
      const btn = wrapper.getByRole('button')
      const error = wrapper.getByTestId('project-form-error')
      return {
        select,
        input,
        btn,
        error,
        wrapper
      }
    }
  });

  describe('PaletteForm Component', () => {

    test('should match the snapshot', () => {
      const { wrapper } = setup();

      expect(wrapper).toMatchSnapshot();
    });

    test("should load with initial state of '' in the add palette input", () => {
      const { input } = setup();

      expect(input.textContent).toBe('');
    });

    test('should allow a user to input a palette name', () => {
      const { input } = setup();

      fireEvent.change(input, { target: { value: 'New Palette Name'} });

      expect(input.value).toBe('New Palette Name');
    });

    test('should reset the input when button is clicked', () => {
      const { select, input, btn } = setup();

      const inputValue = input;

      fireEvent.change(select, {target: {value: 'test'}})
      fireEvent.change(inputValue, { target: { value: 'New Project Name'} });
      fireEvent.click(btn);

      expect(inputValue.textContent).toBe('');
    });

    test('should select a project from the dropdown', () => {
      const { select, wrapper } = setup();

      fireEvent.change(select, {target: {value: 'test'}});

      expect(wrapper.getByTestId('select-project').value).toBe('test');
      expect(wrapper.getByDisplayValue('test')).toBeInTheDocument();
    });

    test('should run setError and display errorif button is pushed with nothing in inputs', () => {
      const { btn, error, wrapper, input } = setup();

      fireEvent.click(btn);

      expect(error.hidden).toEqual(false);
      expect(input.textContent).toBe('');
    });

    test('should run setError and display errorif button is pushed with no project selected', () => {
      const { btn, error, wrapper, select, input } = setup();

      fireEvent.change(select, {target: {value: 'test'}});
      fireEvent.click(btn);

      expect(error.hidden).toEqual(false);
      expect(input.textContent).toBe('');
    });

    test('should run setError and display errorif button is pushed with no palette name', () => {
      const { btn, error, wrapper, select, input } = setup();

      fireEvent.change(input, { target: { value: 'New Project Name'} });
      fireEvent.click(btn);

      expect(error.hidden).toEqual(false);
      expect(input.textContent).toBe('');
    });

  });

  describe('mapDispatchToProps', () => {

    test('should call mapDispatch with a palette when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addPalettes({
        name: "Palette Blue",
        project_id: 2,
        color_one: "#87085",
        color_two: "#87085",
        color_three: "#87085",
        color_four: "#87085",
        color_five: "#87085"
      });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPalettes({
        name: "Palette Blue",
        project_id: 2,
        color_one: "#87085",
        color_two: "#87085",
        color_three: "#87085",
        color_four: "#87085",
        color_five: "#87085"
      });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with the currentPalette and projects data', () => {
      const mockState = {
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}],
        projects: [{name: 'test project', id: 4}],
        palettes: []
      };
      const expected = {
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}],
          projects: [{name: 'test project', id: 4}],
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

});
