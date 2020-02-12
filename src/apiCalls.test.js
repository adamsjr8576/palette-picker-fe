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
      })
    });

    it('should call getProjects with the correct URL', () => {
      const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/projects'
      
      getProjects()

      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('should return an array of projects', () => {
      expect(getProjects()).resolves.toEqual(mockResponse)
    });

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getProjects()).rejects.toEqual(Error('Error fetching projects'))
    });

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getProjects()).rejects.toEqual(Error('fetch failed'))
    });
  });

})