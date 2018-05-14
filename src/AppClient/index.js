import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'

import HeaderClient from './Components/HeaderClient'
import SideBar from './Containers/SideBar'
import FakeContent from './FakeContent'

/**
  * Pages.
  */
import { PageNotFound } from './Pages/ErrorPage'
import SearchPage from './Pages/SearchPage'

const TemplateView = ({children}) => (
  <div className="containerAppClient">
    <SideBar />
    <div className="rightContent">
      <HeaderClient />
      <div className='pageContent'>
        {children}
      </div>
    </div>
  </div>
)

const Router = () => (
  <Switch>
    <Route path="/app" exact component={SearchPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const AppClient = () => (
  <TemplateView>
    <Router />
  </TemplateView>
)

export default AppClient
