export const addNewPalette = currentPalette => ({
  type: 'ADD_PALETTE',
  currentPalette
});

export const updatePaletteLocked = hexCode => ({
  type: 'UPDATE_PALETTE_LOCKED',
  hexCode
});
