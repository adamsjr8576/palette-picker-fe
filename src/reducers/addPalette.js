export const addPalette = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PALETTE':
      return [ action.palette, ...state ]
    default:
      return state
  }
}