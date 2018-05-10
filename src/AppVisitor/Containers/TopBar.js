import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import NavBar, {
  ItemListMobileContainer,
  ItemListMobile,
  ItemMobile,
  ItemList,
  ItemMenu,
  Item
} from '@bt/Components/NavBar'

const MobileMenu = ({isOpen}) => (
  <ItemListMobileContainer isOpen={isOpen}>
    <ItemListMobile>
      <ItemMobile label='Accueil' />
      <ItemMobile label='A propos' />
      <ItemMobile label='Inscription' />
      <ItemMobile label='Connexion' />
    </ItemListMobile>
  </ItemListMobileContainer>
)

const DesktopMenu = ({onClick}) => (
  <ItemList>
    <Item label='Accueil' hideMobile={true} />
    <Item label='A propos' hideMobile={true} />
    <Item label='Inscription' hideMobile={true} />
    <Item label='Connexion' hideMobile={true} />
    <ItemMenu onClick={onClick}/>
  </ItemList>
)

const TopBar = props => {
  const onClick = () => {
    props.actions.updateData('topMenu', props.data.topMenu === true ? false : true)
  }

  return (
    <NavBar isOpen={props.data.topMenu}>
      <MobileMenu isOpen={props.data.topMenu} />
      <DesktopMenu onClick={onClick} />
    </NavBar>
  )
}

export default withApp(TopBar)
