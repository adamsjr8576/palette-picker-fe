import { projects } from '../reducers/projectsReducer';

describe('projectsReducer', () => {
  it('Should have a default state', () => {
    const expected = [];
    const result = projects(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_INITIAL_PROJECTS', () => {
    const mockProjects = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
    const mockAction = {
      type: 'ADD_INITIAL_PROJECTS',
      projects: mockProjects
    };

    const expected = mockProjects;
    const result = projects([], mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_PROJECT', () => {
    const mockState = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
    const mockProject = {name: 'Project3', id: 12};
    const mockAction = {
      type: 'ADD_PROJECT',
      project: mockProject
    };

    const expected = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}, {name: 'Project3', id: 12}];
    const result = projects(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is DELETE_PROJECT', () => {
    const mockState = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
    const mockProject = {name: 'Project1', id: 5}
    const mockAction = {
      type: 'DELETE_PROJECT',
      project: mockProject
    };

    const expected = [{name: 'Project2', id: 6}];
    const result = projects(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
