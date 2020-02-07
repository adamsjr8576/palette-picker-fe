import { combineReducers } from 'redux';
import { addProject } from './addProject';

const rootReducer = combineReducers({
  projects: addProject
});

export default rootReducer;