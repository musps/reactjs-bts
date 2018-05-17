import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import SideBar, {
  ItemList,
  ItemListTitle,
  ItemListItem,
  ItemListDivider,
  ItemUserInfo
} from '@appCl/Components/SideBar'

const UserInfo = () => (
  <ItemList>
    <ItemUserInfo
      fullName='James Bond'
      addr='Adresse de livraison'
      addrValue='57 Rue des vignes, 75015 Paris' />
  </ItemList>
)

const MenuServices = () => (
  <ItemList>
    <ItemListTitle title='Nos agents à vos services' />
    <ItemListItem label='Livraison sur mesure' />
    <ItemListItem label='Restauration' />
    <ItemListItem label='Coursier' />
  </ItemList>
)

const MenuAccount = () => (
  <ItemList full>
    <ItemListTitle title='Mon profil' />
    <ItemListItem label='Mes infos' />
    <ItemListItem label='Historique' />
    <ItemListItem label='Favori' />
  </ItemList>
)

const MenuHelp = () => (
  <ItemList>
    <ItemListDivider />
    <ItemListItem label='Support' />
    <ItemListItem label='Déconnexion' />
  </ItemList>
)

const SideBarContainer = props => {
  return (
    <SideBar>
      <UserInfo />
      <MenuServices />
      <MenuAccount />
      <MenuHelp />
    </SideBar>
  )
}

export default withApp(SideBarContainer)
