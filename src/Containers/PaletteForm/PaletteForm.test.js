import React from 'react';
import { shallow } from 'enzyme';
import { PaletteForm, mapDispatchToProps } from './PaletteForm';
import { addPalette } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('PaletteForm', () => {

  let mockProps, setup

  beforeEach(() => {

    mockProps = {
      addPalette: jest.fn()
    }

    setup = () => {
      const utils = render(<PaletteForm
        addPalette={mockProps.addPalette}
      />)
      const input = utils.getByLabelText('palette-name-input')
      const btn = utils.getByRole('button')
      return {
        input,
        btn,
        ...utils
      }
    }
  });

  describe('PaletteForm Component', () => {

    test('should match the snapshot', () => {
      const { utils } = setup();
  
      expect(utils).toMatchSnapshot();
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
      const { input, btn } = setup();
      const inputValue = input;
      fireEvent.change(inputValue, { target: { value: 'New Project Name'} });
      fireEvent.click(btn);
  
      expect(inputValue.textContent).toBe('')
    });

  });

  describe('mapDispatchToProps', () => {

    test('should call mapDispatch with a palette when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addPalette({ 
        "name": "Palette Blue", 
        "project_id": 2, 
        "color_one": "#87085", 
        "color_two": "#87085", 
        "color_three": "#87085", 
        "color_four": "#87085", 
        "color_five": "#87085" 
      });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPalette({ 
        "name": "Palette Blue", 
        "project_id": 2, 
        "color_one": "#87085", 
        "color_two": "#87085", 
        "color_three": "#87085", 
        "color_four": "#87085", 
        "color_five": "#87085" 
      });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});