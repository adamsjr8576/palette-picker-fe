import React from 'react';
import { shallow } from 'enzyme';
import { PaletteGenerator, mapDispatchToProps, mapStateToProps } from './PaletteGenerator';
import { PaletteCard } from '../PaletteCard/PaletteCard';
import { addPalette } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('PaletteGenerator', () => {

  let mockProps, setup;

  // beforeEach(() => {
  //
  //   mockProps = {
  //     addNewPalette: jest.fn(),
  //     currentPalette:
  //   }
  //
  //   setup = () => {
  //     const utils = render(<PaletteGenerator
  //       addProject={mockProps.addProject}
  //     />)
  //     const input = utils.getByLabelText('name-project-input')
  //     const btn = utils.getByRole('button')
  //     return {
  //       input,
  //       btn,
  //       ...utils,
  //     }
  //   }
  // });

  describe('PalleteGenerator', () => {

    test('should match the snapshot when currentPalette is an empty array', () => {
      mockProps = {
        addNewPalette: jest.fn(),
        currentPalette: []
      }

      setup = () => {
        const utils = render(<PaletteGenerator
          addNewPalette={mockProps.addNewPalette}
          currentPalette={mockProps.currentPalette}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

    test('should match the snapshot when currentPalette is an array of colors', () => {
      mockProps = {
        addNewPalette: jest.fn(),
        currentPalette: [
          {locked: false, color: '#11111'},
          {locked: false, color: '#11111'},
          {locked: false, color: '#11111'},
          {locked: false, color: '#11111'},
          {locked: false, color: '#11111'}],
        updatePaletteLocked: jest.fn()
      }

      const mockMath = Object.create(global.Math);
      mockMath.floor = () => 11111;
      global.Math = mockMath;

      setup = () => {
        const utils = render(<PaletteGenerator
          addNewPalette={mockProps.addNewPalette}
          currentPalette={mockProps.currentPalette}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

  });

});
