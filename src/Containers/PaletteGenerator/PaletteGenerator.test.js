import React from 'react';
import { shallow } from 'enzyme';
import { PaletteGenerator, mapDispatchToProps, mapStateToProps } from './PaletteGenerator';
import { PaletteCard } from '../PaletteCard/PaletteCard';
import { addPalette } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';

describe('PaletteGenerator', () => {

  let mockProps, setup;

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
          updatePaletteLocked={mockProps.updatePaletteLocked}
        />);
        return { utils }
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

    test('Should invoke createPalette on button click and when currentPalette is an empty array', () => {
      mockProps = {
        addNewPalette: jest.fn(),
        currentPalette: [],
        updatePaletteLocked: jest.fn()
      }

      const mockPaletteInitial = [
        {locked: false, color: '#444343'},
        {locked: false, color: '#6D6D6D'},
        {locked: false, color: '#9B9B9B'},
        {locked: false, color: '#C2C2C2'},
        {locked: false, color: '#DCDCDC'}
      ];

      setup = () => {
        const utils = render(<PaletteGenerator
          addNewPalette={mockProps.addNewPalette}
          currentPalette={mockProps.currentPalette}
          updatePaletteLocked={mockProps.updatePaletteLocked}
        />);
        const btn = utils.getByRole('create-palette')
        return {
          btn,
          ...utils
        };
      }

      const { btn } = setup();
      fireEvent.click(btn);
      expect(mockProps.addNewPalette).toHaveBeenCalledWith(mockPaletteInitial);
      expect(mockProps.addNewPalette).toHaveBeenCalledTimes(2);
    });

    test('Should invoke createPalette on button click and when currentPalette has colors it should reassign them', () => {
      mockProps = {
        addNewPalette: jest.fn(),
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}
        ],
        updatePaletteLocked: jest.fn()
      }

      const mockPalette = [
      { locked: false, color: '#2b67' },
      { locked: false, color: '#2b67' },
      { locked: false, color: '#2b67' },
      { locked: false, color: '#2b67' },
      { locked: false, color: '#2b67' }
    ];

      const mockMath = Object.create(global.Math);
      mockMath.floor = () => 11111;
      global.Math = mockMath;

      setup = () => {
        const utils = render(<PaletteGenerator
          addNewPalette={mockProps.addNewPalette}
          currentPalette={mockProps.currentPalette}
          updatePaletteLocked={mockProps.updatePaletteLocked}
        />);
        const btn = utils.getByRole('create-palette')
        return {
          btn,
          ...utils
        };
      }

      const { btn } = setup();
      fireEvent.click(btn);
      expect(mockProps.addNewPalette).toHaveBeenCalledWith(mockPalette);
      expect(mockProps.addNewPalette).toHaveBeenCalledTimes(2);
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
