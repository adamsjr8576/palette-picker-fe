import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  
  describe('App Component', () => {

    it('should match the snapshot', () => {
      wrapper = shallow(<App />)

      expect(wrapper).toMatchSnapshot()
    });
  });

});
