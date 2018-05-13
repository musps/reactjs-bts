import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import SideBar, { ItemList, ItemTitle, Item, ItemDivider, ItemUserInfo } from '@appCl/Components/SideBar'

const MenuServices = ({current}) => {
  return (
    <ItemList>
      <ItemTitle title='Nos agents à vos services' hideTitle={current} />
      <Item label='Livraison sur mesure' onlyIcon={current} srcIcon='/assets/imgs/icons/shopping-basket.png' />
      <Item label='Restauration' onlyIcon={current} srcIcon='/assets/imgs/icons/restauration.png' />
      <Item label='Coursier' onlyIcon={current} srcIcon='/assets/imgs/icons/coursier.png' />
    </ItemList>
  )
}

const MenuAccount = ({current}) => {
  return (
    <ItemList flexGrow={true}>
      <ItemTitle title='Mon profil' hideTitle={current} />
      <Item label='Mes infos' onlyIcon={current} srcIcon='/assets/imgs/icons/info.png' />
      <Item label='Historique' onlyIcon={current} srcIcon='/assets/imgs/icons/historique.png' />
      <Item label='Favori' onlyIcon={current} srcIcon='/assets/imgs/icons/favori.png' />
    </ItemList>
  )
}

const MenuHelp = ({current}) => {
  return (
    <ItemList>
      <ItemDivider />
      <Item label='Support' onlyIcon={current} srcIcon='/assets/imgs/icons/aide.png' />
      <Item label='Déconnexion' onlyIcon={current} srcIcon='/assets/imgs/icons/off.png' />
    </ItemList>
  )
}

const SideBarContainer = props => {
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
        srcIcon='/assets/imgs/icons/info.png'
      />
      <MenuServices current={current} />
      <MenuAccount current={current} />
      <MenuHelp current={current} />
    </SideBar>
  )
}

export default withApp(SideBarContainer)
