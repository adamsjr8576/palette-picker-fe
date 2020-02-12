import React from 'react';
import { ProjectCard, mapDispatchToProps, mapStateToProps } from './ProjectCard';
import { addPalettes, deleteProjectFromStore, deletePaletteByProjectId } from '../../actions/index';
import { render, fireEvent } from '@testing-library/react';
import { deleteProject, getPaletteByProjectId  } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('ProjectCard', () => {
  let mockProps, setup;

  describe('ProjectCard Component', () => {

    beforeEach(() => {
      getPaletteByProjectId.mockImplementation(() => {
        return Promise.resolve([{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }]);
      })

      deleteProject.mockImplementation(() => {
        return Promise.resolve('Successful delete!');
      })
    });


    test('should match the snapshot when palettes is an empty array', () => {
      mockProps = {
        name: 'Project 2',
        id: 5,
        addPalettes: jest.fn(),
        palettes: [],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}],
        deleteProjectFromStore: jest.fn(),
        deletePaletteByProjectId: jest.fn()
      }

      setup = () => {
        const utils = render(<ProjectCard
          name={mockProps.name}
          id={mockProps.id}
          addPalettes={mockProps.addPalettes}
          palettes={mockProps.palettes}
          projects={mockProps.projects}
          deleteProjectFromStore={mockProps.deleteProjectFromStore}
          deletePaletteByProjectId={mockProps.deletePaletteByProjectId}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

    test('should match the snapshot when palettes is an array of palettes', () => {
      mockProps = {
        name: 'Project 2',
        id: 5,
        addPalettes: jest.fn(),
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        },
        {
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 23,
          name: "Hot Sauce",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}],
        deleteProjectFromStore: jest.fn(),
        deletePaletteByProjectId: jest.fn()
      }

      setup = () => {
        const utils = render(<ProjectCard
          name={mockProps.name}
          id={mockProps.id}
          addPalettes={mockProps.addPalettes}
          palettes={mockProps.palettes}
          projects={mockProps.projects}
          deleteProjectFromStore={mockProps.deleteProjectFromStore}
          deletePaletteByProjectId={mockProps.deletePaletteByProjectId}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(utils).toMatchSnapshot();
    });

    test('should invoke getPaletteByProjectId on render in useEffect', () => {
      mockProps = {
        name: 'Project 2',
        id: 5,
        addPalettes: jest.fn(),
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        },
        {
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 23,
          name: "Hot Sauce",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}],
        deleteProjectFromStore: jest.fn(),
        deletePaletteByProjectId: jest.fn()
      }

      setup = () => {
        const utils = render(<ProjectCard
          name={mockProps.name}
          id={mockProps.id}
          addPalettes={mockProps.addPalettes}
          palettes={mockProps.palettes}
          projects={mockProps.projects}
          deleteProjectFromStore={mockProps.deleteProjectFromStore}
          deletePaletteByProjectId={mockProps.deletePaletteByProjectId}
        />)
        return { utils };
      }

      const { utils } = setup();
      expect(getPaletteByProjectId).toHaveBeenCalledWith(5);
    });

    test('Should delete a project when button is clicked', () => {
      mockProps = {
        name: 'Project 2',
        id: 5,
        addPalettes: jest.fn(),
        palettes: [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        },
        {
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 23,
          name: "Hot Sauce",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}],
        deleteProjectFromStore: jest.fn(),
        deletePaletteByProjectId: jest.fn()
      }

      setup = () => {
        const utils = render(<ProjectCard
          name={mockProps.name}
          id={mockProps.id}
          addPalettes={mockProps.addPalettes}
          palettes={mockProps.palettes}
          projects={mockProps.projects}
          deleteProjectFromStore={mockProps.deleteProjectFromStore}
          deletePaletteByProjectId={mockProps.deletePaletteByProjectId}
        />)
        const header = utils.getByTestId('project-name')
        const btn = utils.getByTestId('button-id')
        return {
          header,
          btn,
          ...utils
        };
      }

      const { header, btn, utils } = setup();
      fireEvent.click(btn);
      expect(deleteProject).toHaveBeenCalledWith(5, {name: 'Project1', id: 5});
      expect(mockProps.deletePaletteByProjectId).toHaveBeenCalledWith(5);
      expect(mockProps.deleteProjectFromStore).toHaveBeenCalledWith({name: 'Project1', id: 5});
    });

    describe('mapStateToProps', () => {
      it('Should return an object with the palettes and projects', () => {
        const mockState = {
          palettes: [{
            colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
            id: 21,
            name: "Candy",
            created_at: "2020-02-11T21:07:35.955Z",
            updated_at: "2020-02-11T21:07:35.955Z",
            project_id: 2
          }],
          projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}],
          currentPalette: [
            {locked: false, color: '#444343'},
            {locked: false, color: '#6D6D6D'},
            {locked: false, color: '#9B9B9B'},
            {locked: false, color: '#C2C2C2'},
            {locked: false, color: '#DCDCDC'}]
        }
        const expected = {
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

        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
      });
    });

    describe('mapDispatchToProps', () => {
      it('Should call dispatch with addPalettes action', () => {
        const palettes = [{
          colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
          id: 21,
          name: "Candy",
          created_at: "2020-02-11T21:07:35.955Z",
          updated_at: "2020-02-11T21:07:35.955Z",
          project_id: 2
        }];
        const mockDispatch = jest.fn();
        const actionToDispatch = addPalettes(palettes);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.addPalettes(palettes);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

      it('Should call dispatch with deletePaletteByProjectId action', () => {
        const id = 5;
        const mockDispatch = jest.fn();
        const actionToDispatch = deletePaletteByProjectId(id);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.deletePaletteByProjectId(id);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

      it('Should call dispatch with deleteProjectFromStore action', () => {
        const project = {name: 'Project1', id: 5};
        const mockDispatch = jest.fn();
        const actionToDispatch = deleteProjectFromStore(project);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.deleteProjectFromStore(project);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
    });
  });
});
