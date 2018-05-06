import React, { Component } from 'react';
import PropTypes from 'prop-types'

export const AppContextTypes = {
  data: PropTypes.object,
  actions: PropTypes.object
}

export class AppWrapper extends Component {
  static childContextTypes = AppContextTypes;

  state = {
    data: {},
    actions: {}
  }

  constructor(props) {
    super(props)
  }

  useContextForAct(actions, context) {
    if (typeof actions === 'undefined' || Object.keys(actions).length === 0) {
      return {}
    } else {
      return Object.assign(...Object.keys(actions).map(actName => {
        return {
          [actName]: actions[actName].bind(context)
        }
      }))
    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.data,
      actions: this.useContextForAct(this.props.actions, this)
    })
  }

  getChildContext() {
    return {
      data: this.state.data,
      actions: this.state.actions
    }
  }

  render() {
    return this.props.children
  }
}

export const withApp = Comp => {
  const Wrapper = (props, {data, actions}) => (
    <Comp data={data} actions={actions} {...props} />
  )

  Wrapper.contextTypes = AppContextTypes;
  return Wrapper;
}
