export const addPalette = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PALETTE_TO_PROJECT':
      return [ ...state, ...action.palettes ]
    default:
      return state
  }
}