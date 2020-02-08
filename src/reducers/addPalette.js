export const addPalette = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PALETTE_TO_PROJECT':
      return [ action.palette, ...state ]
    default:
      return state
  }
}