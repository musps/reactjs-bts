import React, { Component, Fragment } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import NavBar, {
  DesktopLink,
  MobileItem
} from './../Components/NavBar'

const MenuDesktop = () => (
  <Fragment>
    <DesktopLink label='Accueil' hideMobile
      location='/site' />
    <DesktopLink label='Comment ça marche ?' hideMobile
      location='/site/help' />
    <DesktopLink label='Inscription' hideMobile
      location='/site/account/register' />
    <DesktopLink label='Connexion' hideMobile
      location='/site/account/login' />
  </Fragment>
)

const MenuMobile = () => (
  <Fragment>
    <MobileItem label='Accueil'
      location='/' />
    <MobileItem label='Comment ça marche ?'
      location='/help' />
    <MobileItem label='Inscription'
      location='/account/register' />
    <MobileItem label='Connexion'
      location='/account/login' />
  </Fragment>
)

const NavBarContainer = props => {
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

export default withApp(NavBarContainer)
