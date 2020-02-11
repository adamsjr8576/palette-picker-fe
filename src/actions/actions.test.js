import * as actions from '../actions';

describe('actions', () => {
  it('Should have a type of ADD_PALETTE', () => {
    const currentPalette = [
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'}];
    const expectedAction = {
      type: 'ADD_PALETTE',
      currentPalette
    }

    const result = actions.addNewPalette(currentPalette);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of UPDATE_PALETTE_LOCKED', () => {
    const hexCode = '#92856'
    const expectedAction = {
      type: 'UPDATE_PALETTE_LOCKED',
      hexCode
    }

    const result = actions.updatePaletteLocked(hexCode);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_INITIAL_PROJECTS', () => {
    const projects = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
    const expectedAction = {
      type: 'ADD_INITIAL_PROJECTS',
      projects
    }

    const result = actions.addInitialProjects(projects);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_PALETTE_TO_PROJECT', () => {
    const palettes = [{
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
    }];
    const expectedAction = {
      type: 'ADD_PALETTE_TO_PROJECT',
      palettes
    }

    const result = actions.addPalettes(palettes);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_PROJECT', () => {
    const project = {name: 'Project1', id: 5}
    const expectedAction = {
      type: 'ADD_PROJECT',
      project
    }

    const result = actions.addProject(project);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of DELETE_PALETTE', () => {
    const palette = {
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }
    const expectedAction = {
      type: 'DELETE_PALETTE',
      palette
    }

    const result = actions.deletePaletteFromStore(palette);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of DELETE_PROJECT', () => {
    const project = {name: 'Project1', id: 5}
    const expectedAction = {
      type: 'DELETE_PROJECT',
      project
    }

    const result = actions.deleteProjectFromStore(project);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of DELETE_PALETTE_BY_PROJECT_ID', () => {
    const id = 12;
    const expectedAction = {
      type: 'DELETE_PALETTE_BY_PROJECT_ID',
      id
    }

    const result = actions.deletePaletteByProjectId(id);
    expect(result).toEqual(expectedAction);
  });
});
