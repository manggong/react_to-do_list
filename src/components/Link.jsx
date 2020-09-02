import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { isProperty } from '@babel/types';

export default class Link extends Component {
  render() {
    return;
    <button
      onClick={this.props.onClick}
      disabled={this.props.active}
      style={{
        marginLeft: '4px'
      }}
    >
      {this.props.children}
    </button>;
  }
}

Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
