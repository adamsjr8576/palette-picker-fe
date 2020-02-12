import React from 'react';
import { ProjectPalette, mapDispatchToProps, mapStateToProps } from './ProjectPalette';
import { deletePaletteFromStore } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';
import { deletePalette } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('ProjectPalette', () => {
  let mockProps, setup;

  describe('ProjectPalette Component', () => {

    beforeEach(() => {
      deletePalette.mockImplementation(() => {
        return Promise.resolve('Successful delete!');
      });
    });

    test('Should match the snapshot', () => {
      mockProps = {
        name: 'Party Palette',
        id: 15,
        colors: ['#11232', '#11222', '#34232', '#11562', '#11852'],
        deletePaletteFromStore: jest.fn(),
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }]
      }

      setup = () => {
        const utils = render(<ProjectPalette
          name={mockProps.name}
          id={mockProps.id}
          colors={mockProps.colors}
          deletePaletteFromStor={mockProps.deletePaletteFromStore}
          palettes={mockProps.palettes}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

    test('Should run removePalette on button click', () => {
      mockProps = {
        name: 'Party Palette',
        id: 15,
        colors: ['#11232', '#11222', '#34232', '#11562', '#11852'],
        deletePaletteFromStore: jest.fn(),
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 15,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }]
      }

      setup = () => {
        const utils = render(<ProjectPalette
          name={mockProps.name}
          id={mockProps.id}
          colors={mockProps.colors}
          deletePaletteFromStore={mockProps.deletePaletteFromStore}
          palettes={mockProps.palettes}
        />)
        const btn = utils.getByTestId('delete-button')
        return {
          btn,
          ...utils
        };
      }

      const { btn, utils } = setup();
      fireEvent.click(btn);
      expect(deletePalette).toHaveBeenCalledWith(15, {
        colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
        id: 15,
        name: "Candy",
        created_at: "2020-02-11T21:07:35.955Z",
        updated_at: "2020-02-11T21:07:35.955Z",
        project_id: 2
      });
      expect(mockProps.deletePaletteFromStore).toHaveBeenCalledWith({
        colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
        id: 15,
        name: "Candy",
        created_at: "2020-02-11T21:07:35.955Z",
        updated_at: "2020-02-11T21:07:35.955Z",
        project_id: 2
      });
    });

  describe('mapStateToProps', () => {
    it('Should return an object with the palettes', () => {
      const mockState = {
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}]
      }
      const expected = {
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should call dispatch with deletePaletteFromStore action', () => {
      const palette = {
        colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
        id: 21,
        name: "Candy",
        created_at: "2020-02-11T21:07:35.955Z",
        updated_at: "2020-02-11T21:07:35.955Z",
        project_id: 2
      };
      const mockDispatch = jest.fn();
      const actionToDispatch = deletePaletteFromStore(palette);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.deletePaletteFromStore(palette);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  });
});
