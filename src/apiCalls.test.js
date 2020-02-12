import { postProject, getProjectById, getProjects, postPalette, getPaletteById, deletePalette, deleteProject, getPaletteByProjectId } from './apiCalls';

describe('apiCalls', () => {

  describe('getProjects', () => {

    let mockResponse = [
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

    let mockResponse = [
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
      let id = 15;
      const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id.id}`;
      
      getProjectById(id);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array with a single project based on id', () => {
      let id = 15;

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
    
    let mockTitle = {
        name: 'Best Title EVER'
      } 
    let mockResponse = {
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

})