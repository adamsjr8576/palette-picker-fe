export const addProject = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      const newProject = {
        name: action.name,
      }
      return [ newProject, ...state ]
    default:
      return state
  }
}