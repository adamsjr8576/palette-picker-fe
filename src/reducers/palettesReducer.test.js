import { palettes } from '../reducers/palettesReducer';

describe('palettesReducer', () => {
  it('Should have a default state', () => {
    const expected = [];
    const result = palettes(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_PALETTE_TO_PROJECT', () => {
    const mockState = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];
    const mockPalettes = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];
    const mockAction = {
      type: 'ADD_PALETTE_TO_PROJECT',
      palettes: mockPalettes
    };
    const expected = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    },{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];
    const result = palettes(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is DELETE_PALETTE', () => {
    const mockState = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }, {
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];
    const mockPalette = {
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    };
    const mockAction = {
      type: 'DELETE_PALETTE',
      palette: mockPalette
    };

    const expected = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];
    const result = palettes(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is DELETE_PALETTE_BY_PROJECT_ID', () => {
    const mockState = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 1
    }, {
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 23,
      name: "Hot Sauce",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 2
    }];

    const mockId = 2;

    const mockAction = {
      type: 'DELETE_PALETTE_BY_PROJECT_ID',
      id: mockId
    };

    const expected = [{
      colors: ["#c005d4", "#57a3d0", "#88b8b1", "#7bac74", "#e6488b"],
      id: 21,
      name: "Candy",
      created_at: "2020-02-11T21:07:35.955Z",
      updated_at: "2020-02-11T21:07:35.955Z",
      project_id: 1
    }];
    const result = palettes(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
