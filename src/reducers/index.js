import { combineReducers } from 'redux';
import { currentPalette } from './currentPaletteReducer';

export const rootReducer = combineReducers({
  currentPalette
});
