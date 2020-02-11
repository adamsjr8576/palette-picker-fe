import React from 'react';
import { Header, mapStateToProps } from './Header'
import { shallow } from 'enzyme';

describe('Header', () => {

  let wrapper, mockCurrentPalette;

  describe('Header Component', () => {

    it('should match the snapshot when currentPalette is an empty array', () => {
      mockCurrentPalette = [];
      wrapper = shallow(<Header currentPalette={mockCurrentPalette}/>)
      expect(wrapper).toMatchSnapshot()
    });

    it('should match the snapshot when currentPalette is an array of colors', () => {
      mockCurrentPalette = [
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'},
        {locked: false, color: '#11111'}];
      wrapper = shallow(<Header currentPalette={mockCurrentPalette}/>)
      expect(wrapper).toMatchSnapshot()
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
