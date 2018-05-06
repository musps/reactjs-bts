import React, { Component } from 'react'
import { withApp } from '@bt/Wrapper/AppWrapper'

const Home = class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        Home page !
        <button onClick={this.props.actions.loaderShow}>update value</button>
      </div>
    )
  }
}

export default withApp(Home)
