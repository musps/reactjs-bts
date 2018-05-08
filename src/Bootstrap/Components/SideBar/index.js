import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles, { HandlerButtonCSS, ItemListCSS } from './styles'

const HandlerButton = ({open, close, current, onClick}) => {
  const _current = current === true ? close : open;

  return (
    <HandlerButtonCSS.main>
      <HandlerButtonCSS.trigger onClick={onClick}>
        {_current}
      </HandlerButtonCSS.trigger>
    </HandlerButtonCSS.main>
  )
}

const ItemList = ({title}) => {
  return (
    <ItemListCSS.main>
      <ItemListCSS.title>{title}</ItemListCSS.title>
    </ItemListCSS.main>
  )
}

const SideBar = class SideBar extends Component {
  state = {
    current: true
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState(prevState => ({
      current: prevState.current === true ? false : true
    }))
  }

  render() {
    return (
      <styles.main current={this.state.current}>
        <HandlerButton 
          open={'ouvrir'} 
          close={'fermer'} 
          current={this.state.current}
          onClick={this.onClick}
        />

        <ItemList title={'title'} />

      </styles.main>
    )
  }
}

export default SideBar
