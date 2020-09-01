import { VisibilityFilter } from '../actions';

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIVILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
