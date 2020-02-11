export const addPalette = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PALETTE_TO_PROJECT':
      return [ ...state, ...action.palettes ]

    case 'DELETE_PALETTE':
      const findPaletteById = state.find(item => item.id === action.palette.id)
      const index = state.indexOf(findPaletteById);
      state.splice(index, 1)
      return [ ...state ]

    default:
      return state
  }
}