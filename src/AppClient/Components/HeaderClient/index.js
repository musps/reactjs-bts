import React, { Component, Fragment } from 'react'
import './styles.css'

const HeaderClient = ({searchBarContent, accountContent}) => (
  <div>
    <header className='headerClient position-NoActionYet'>
      <div className='searchBarContent orderSecond'>
        {searchBarContent}
      </div>
      <div className='accountContent orderFirst'>
        {accountContent}
      </div>
    </header>
  </div>
)

const Icon = () => (
  <div className='iconAccs iconAccsMargin'>
  </div>
)

const AccountContent = () => (
  <Fragment>
    <Icon />
    <Icon />
  </Fragment>
)

const HeaderClientContainer = () => (
  <HeaderClient
    accountContent={<AccountContent />}
  />
)

export default HeaderClientContainer
