import { postProject, getProjectById, getProjects, postPalette, getPaletteById, deletePalette, deleteProject, getPaletteByProjectId } from './apiCalls';

describe('apiCalls', () => {

  describe('getProjects', () => {

    const mockResponse = [
      {
          "id": 2,
          "name": "Best Project",
          "created_at": "2020-02-08T22:38:10.755Z",
          "updated_at": "2020-02-08T22:38:10.755Z"
      },
      {
          "id": 15,
          "name": "Trasha's Craft Time",
          "created_at": "2020-02-11T21:02:51.290Z",
          "updated_at": "2020-02-11T21:02:51.290Z"
      },
      {
          "id": 16,
          "name": "Craft Time",
          "created_at": "2020-02-11T21:07:48.626Z",
          "updated_at": "2020-02-11T21:07:48.626Z"
      }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getProjects with the correct URL', () => {
      const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
      
      getProjects();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of projects', () => {
      expect(getProjects()).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getProjects()).rejects.toEqual(Error('Error fetching projects'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getProjects()).rejects.toEqual(Error('fetch failed'));
    });
  });

  describe('getProjectById', () => {

    const mockResponse = [
      {
        "id": 15,
        "name": "Trasha's Craft Time",
        "created_at": "2020-02-11T21:02:51.290Z",
        "updated_at": "2020-02-11T21:02:51.290Z"
      }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getProjectById with the correct URL', () => {
      const id = 15;
      const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id.id}`;
      
      getProjectById(id);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array with a single project based on id', () => {
      const id = 15;

      expect(getProjectById(id)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });
      const mockFailedId = 1;

      expect(getProjectById(mockFailedId)).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  describe('postProject', () => {
    
    const mockTitle = {
        name: 'Best Title EVER'
      } 
    const mockResponse = {
        id: 3
      }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call postProject with the correct URL', () => {
      const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects';
      const expected = {
        method: 'POST',
          body: JSON.stringify({
            name: mockTitle
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      postProject(mockTitle);

      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    test('should return an object with an id', () => {
      expect(postProject(mockTitle)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(postProject()).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  describe('postPalette', () => {

    const mockPalette = { 
      "name": "Palette Blue", 
      "project_id": 2, 
      "color_one": "#87085", 
      "color_two": "#87085", 
      "color_three": "#87085", 
      "color_four": "#87085", 
      "color_five": "#87085" 
    }
    const mockResponse = {
        id: 3
      }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call postPalette with the correct URL', () => {
      const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes';
      const expected = {
        method: 'POST',
          body: JSON.stringify(
            mockPalette
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      postPalette(mockPalette);

      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    test('should return an object with an id', () => {
      expect(postPalette(mockPalette)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(postPalette()).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  describe('getPaletteById', () => {

    const mockResponse = { 
      "colors": [ 
        "#11111", 
        "#11111", 
        "#11111", 
        "#111111", 
        "#11111" 
      ], 
      "id": 1, 
      "name": "GOOD NAME", 
      "project_id": 1, 
      "created_at": "2020-02-04T20:12:20.944Z", 
      "updated_at": "2020-02-04T20:12:20.944Z" 
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getPaletteById with the correct URL', () => {
      const id = 1;
      const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id.id}`;
      
      getPaletteById(id);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an single palette object based on id', () => {
      const id = 15;

      expect(getPaletteById(id)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      const mockFailedId = 2;

      expect(getPaletteById(mockFailedId)).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  describe('deletePalette', () => {

    const mockResponse = { "message": "Success: Project has been removed" }

    const palette = { 
      "colors": [ 
        "#11111", 
        "#11111", 
        "#11111", 
        "#111111", 
        "#11111" 
      ], 
      "id": 1, 
      "name": "GOOD NAME", 
      "project_id": 1, 
      "created_at": "2020-02-04T20:12:20.944Z", 
      "updated_at": "2020-02-04T20:12:20.944Z" 
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call deletePalette with the correct URL', () => {
      const id = 1;
      const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id}`;
      const expected = {
        method: 'DELETE',
          body: JSON.stringify({
            palette
          }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      deletePalette(id, palette);

      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    test('should return a message', () => {
      expect(deletePalette(palette)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(deletePalette(palette)).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  describe('deleteProject', () => {

    const mockResponse = { "message": "Success: Project has been removed" }

    const project = {
      "id": 2,
      "name": "Best Project",
      "created_at": "2020-02-08T22:38:10.755Z",
      "updated_at": "2020-02-08T22:38:10.755Z"
  }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call deleteProject with the correct URL', () => {
      const id = 2;
      const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`;
      const expected = {
        method: 'DELETE',
          body: JSON.stringify({
            project
          }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      deleteProject(id, project);

      expect(window.fetch).toHaveBeenCalledWith(url, expected);
    });

    test('should return a message', () => {
      expect(deleteProject(project)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(deleteProject(project)).rejects.toEqual(Error('Error fetching projects'));
    });
  });

  





});





