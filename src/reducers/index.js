import { combineReducers } from 'redux';
import { currentPalette } from './currentPaletteReducer';
import { projects } from './projects';
import { addPalette } from './addPalette';

export const rootReducer = combineReducers({
  currentPalette,
  projects,
  palettes: addPalette
});
