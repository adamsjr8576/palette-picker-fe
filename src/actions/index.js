export const addNewPalette = currentPalette => ({
  type: 'ADD_PALETTE',
  currentPalette
});

export const updateLockOnPalette = hexCode => ({
  type: 'UPDATE_LOCKED_PALETTE',
  hexCode
});
