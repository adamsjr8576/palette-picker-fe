export const projects = (state=[], action) => {
  switch(action.type) {
    case 'ADD_INITIAL_PROJECTS':
      return action.projects

    case 'ADD_PROJECT':
      return [ ...state, action.project ]

    case 'DELETE_PROJECT':
        const findProjectById = state.find(item => item.id === action.project.id)
        const index = state.indexOf(findProjectById);
        state.splice(index, 1)
        return [ ...state ]

    default:
      return state
  }
}