import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilter } from '../actions';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
          COMPLETED
        </FilterLink>
      </div>
    );
  }
}
