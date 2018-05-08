import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import LeftMenu from '@/Components/LeftMenu'

const Home = class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <LeftMenu />
      </div>
    )
  }
}

export default withApp(Home)
