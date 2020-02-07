import { combineReducers } from 'redux';
import { currentPalette } from './currentPaletteReducer';
import { addProject } from './addProject';
import { addPalette } from './addPalette';

export const rootReducer = combineReducers({
  currentPalette,
  projects: addProject,
  palettes: addPalette
});
