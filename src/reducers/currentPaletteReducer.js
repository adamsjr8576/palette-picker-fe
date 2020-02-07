export const currentPalette = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALETTE':
      return action.currentPalette;

    case 'UPDATE_PALETTE_LOCKED':
      const currentPalettes = [...state];
      const updatedCurrentPalettes = currentPalettes.map(palette => {
        if (palette.color === action.hexCode) {
          return {locked: !palette.locked, color: palette.color}
        }
        return palette;
      });
      return updatedCurrentPalettes;
      
    default:
      return state;
  }
}
