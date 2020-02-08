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
      const select = utils.getByDisplayValue('select')
      const input = utils.getByLabelText('palette-name-input')
      const btn = utils.getByRole('button')
      return {
        input,
        btn,
        select,
        ...utils,
      }
    }
  });

  describe('PaletteForm Component', () => {

    test('should match the snapshot', () => {
      const { utils } = setup();
  
      expect(utils).toMatchSnapshot();
    });

    test('should allow a user to select a project from the drop down')
  
  //   test("should load with initial state of '' in the add project input", () => {
  //     const { input } = setup();
  //     const inputValue = input;
  
  //     expect(inputValue.textContent).toBe('');
  //   });
    
  //   test('should allow a user to input a name', () => {
  //     const { input } = setup();
  //     fireEvent.change(input, { target: { value: 'New Project Name'} });
  
  //     expect(input.value).toBe('New Project Name')
  //   });
  
  //   test('should reset the input when button is clicked', () => {
  //     const { input, btn } = setup();
  //     const inputValue = input;
  //     fireEvent.change(inputValue, { target: { value: 'New Project Name'} });
  //     fireEvent.click(btn);
  
  //     expect(inputValue.textContent).toBe('')
  //   });
  // })

  // describe('mapDispatchToProps', () => {

  //   test('should call mapDispatch with a name when handleLogin is called', () => {
  //     const mockDispatch = jest.fn();
  //     const actionToDispatch = addProject({ name: 'Rick' });

  //     const mappedProps = mapDispatchToProps(mockDispatch);
  //     mappedProps.addProject({ name: 'Rick' });

  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  //   });
  });
});