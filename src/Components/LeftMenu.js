import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import SideBar, { ItemList, ItemTitle, Item, ItemDivider, ItemUserInfo } from '@bt/Components/SideBar'

const MenuServices = ({current}) => {
  return (
    <ItemList>
      <ItemTitle title='Nos agents à vos services' hideTitle={current} />
      <Item label='Livraison sur mesure' onlyIcon={current} />
      <Item label='Restauration' onlyIcon={current} />
      <Item label='Coursier' onlyIcon={current} />
    </ItemList>
  )
}

const MenuAccount = ({current}) => {
  return (
    <ItemList flexGrow={true}>
      <ItemTitle title='Mon profil' hideTitle={current} />
      <Item label='Mes infos' onlyIcon={current} />
      <Item label='Historique' onlyIcon={current} />
      <Item label='Profil' onlyIcon={current} />
    </ItemList>
  )
}

const MenuHelp = ({current}) => {
  return (
    <ItemList>
      <ItemDivider />
      <Item label='Support' onlyIcon={current} />
      <Item label='Déconnexion' onlyIcon={current} />
    </ItemList>
  )
}

const LeftMenu = props => {
  const current = props.data.leftMenu
  const onClick = () => {
    props.actions.updateData('leftMenu', props.data.leftMenu === true ? false : true)
  }

  return (
    <SideBar 
      current={current} 
      open='Ouvrir' 
      close='Fermer'
      onClick={onClick}>

      <ItemUserInfo
        fullname='James Bond'
        addr='Adresse de livraison'
        addrValue='57 Rue des vignes, 75015 Paris'
        onlyIcon={current}
      />
      <MenuServices current={current} />
      <MenuAccount current={current} />
      <MenuHelp current={current} />
    </SideBar>
  )
}

export default withApp(LeftMenu)
