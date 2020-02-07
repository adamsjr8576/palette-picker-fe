export const addNewPalette = currentPalette => ({
  type: 'ADD_PALETTE',
  currentPalette
});

export const updatePaletteLocked = hexCode => ({
  type: 'UPDATE_PALETTE_LOCKED',
  hexCode
});

export const addProject = (name) => ({
  type: 'ADD_PROJECT',
  name
});

export const addPalette = (palette) => ({
  type: 'ADD_PALETTE_TO_PROJECT',
  palette
});
