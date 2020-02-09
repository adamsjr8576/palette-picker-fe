export const projects = (state=[], action) => {
  switch(action.type) {
    case 'ADD_INITIAL_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return [ ...state, action.project ]
    default:
      return state
  }
}