export const currentPalette = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALETTE':
      return action.currentPalette;
    default:
      return state;
  }
}
