import { combineReducers } from 'redux';
import { addProject } from './addProject';
import { addPalette } from './addPalette';

const rootReducer = combineReducers({
  projects: addProject,
  palettes: addPalette
});

export default rootReducer;