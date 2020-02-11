export const addNewPalette = currentPalette => ({
  type: 'ADD_PALETTE',
  currentPalette
});

export const updatePaletteLocked = hexCode => ({
  type: 'UPDATE_PALETTE_LOCKED',
  hexCode
});

export const addInitialProjects = projects => ({
  type: 'ADD_INITIAL_PROJECTS',
  projects
});

export const addPalettes = palettes => ({
  type: 'ADD_PALETTE_TO_PROJECT',
  palettes
});

export const addProject = project => ({
  type: 'ADD_PROJECT',
  project
});

export const deletePaletteFromStore = palette => ({
  type: 'DELETE_PALETTE',
  palette
});

export const deleteProjectFromStore = project => ({
  type: 'DELETE_PROJECT',
  project
});
