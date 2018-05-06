import React, { Component } from 'react'
import { withApp } from '@bt/Wrapper/AppWrapper'

const Home = class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.actions.translate('global.app_name')}
        <button onClick={this.props.actions.loaderShow}>update value</button>
      </div>
    )
  }
}

export default withApp(Home)
