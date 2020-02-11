export const addPalette = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PALETTE_TO_PROJECT':
      return [ ...state, ...action.palettes ]

    case 'DELETE_PALETTE':
      const findPaletteById = state.find(item => item.id === action.palette.id)
      const index = state.indexOf(findPaletteById);
      state.splice(index, 1)
      return [ ...state ]

      case 'DELETE_PALETTE_BY_PROJECT_ID':
        const filterPalette = state.filter(item => item.project_id !== action.id);
        return filterPalette

    default:
      return state
  }
}