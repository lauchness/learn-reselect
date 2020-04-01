import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions/types';

const getTodos = state => state.todos;
const getVisibilityFilter = state => state.visibilityFilter;

const getVisibleTodos = createSelector(
  getTodos,
  getVisibilityFilter,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(({ completed }) => !completed);
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(({ completed }) => completed);
      default:
        throw new Error('Invalid visibility filter');
    }
  }
);

export { getTodos, getVisibilityFilter, getVisibleTodos };
