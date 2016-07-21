import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  const Authentication = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    },

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    },

    render () {
      return <ComposedComponent {...this.props} />
    }
  })

  const mapStateToProps = state => ({
    authenticated: state.UserInteractionsReducer.authenticated
  })

  return connect(mapStateToProps)(Authentication);
}
