import React, { Component, Fragment } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import NavBar, {
  DesktopLink,
  MobileItem
} from './../Components/NavBar'

const MenuDesktop = () => (
  <Fragment>
    <DesktopLink label='Accueil' hideMobile />
    <DesktopLink label='Comment ça marche ?' hideMobile />
    <DesktopLink label='Inscription' hideMobile />
    <DesktopLink label='Connexion' hideMobile />
  </Fragment>
)

const MenuMobile = () => (
  <Fragment>
    <MobileItem label='Accueil' />
    <MobileItem label='Comment ça marche ?' />
    <MobileItem label='Inscription' />
    <MobileItem label='Connexion' />
  </Fragment>
)

const TopBar = props => {
  const onClickOpenMobile = () => {
    props.actions.updateData('topMenu', props.data.topMenu === true ? false : true)
  }

  return (
    <NavBar
      desktopMenu={<MenuDesktop />}
      mobileMenu={<MenuMobile />}
      openMobile={props.data.topMenu}
      onClickOpenMobile={onClickOpenMobile} />
  )
}

export default withApp(TopBar)
