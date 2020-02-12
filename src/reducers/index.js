import { combineReducers } from 'redux';
import { currentPalette } from './currentPaletteReducer';
import { projects } from './projectsReducer';
import { palettes } from './palettesReducer';

export const rootReducer = combineReducers({
  currentPalette,
  projects,
  palettes
});
