import React from 'react';
import { ProjectContainer, mapDispatchToProps, mapStateToProps } from './ProjectContainer';
import { addInitialProjects } from '../../actions/index';
import { shallow } from 'enzyme';

describe('PaletteGenerator', () => {

  let mockAddInitialProjects = jest.fn();
  let mockProjects = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
  let wrapper;

  describe('PalleteGenerator', () => {

    it('should match the snapshot with an array of projects', () => {
      wrapper = shallow(<ProjectContainer
        addInitialProjects={mockAddInitialProjects}
        projects={mockProjects}
        />)

      expect(wrapper).toMatchSnapshot()
    });

    it('should match the snapshot where projects is an empty array', () => {
      mockProjects = [];
      wrapper = shallow(<ProjectContainer
        addInitialProjects={mockAddInitialProjects}
        projects={mockProjects}
        />)

      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    test('should return an object with the projects data', () => {
      const mockState = {
        currentPalette: [
          {locked: false, color: '#444343'},
          {locked: false, color: '#6D6D6D'},
          {locked: false, color: '#9B9B9B'},
          {locked: false, color: '#C2C2C2'},
          {locked: false, color: '#DCDCDC'}],
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}]
      };
      const expected = {
        projects: [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with addInitialProjects action ', () => {
      const projects = [{name: 'Project1', id: 5}, {name: 'Project2', id: 6}];
      const mockDispatch = jest.fn();
      const actionToDispatch = addInitialProjects(projects);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addInitialProjects(projects);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });
});
