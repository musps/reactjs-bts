import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'

/**
  * Components.
  */
import SideBar from './Containers/SideBar'

/**
  * Container
  */
import HeaderContainer from './Containers/Header'

/**
  * Pages.
  */
import { PageNotFound } from './Pages/ErrorPage'
import SearchPage from './Pages/SearchPage'
import SearchResultPage from './Pages/SearchResult'

const TemplateView = ({children}) => (
  <div className="containerAppClient">
    <SideBar />
    <div className="rightContent">
      <HeaderContainer />
      <div className='pageContent'>
        {children}
      </div>
    </div>
  </div>
)

const Router = () => (
  <Switch>
    <Route path="/app" exact component={SearchPage} />
    <Route path="/app/search" component={SearchResultPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const AppClient = () => (
  <TemplateView>
    <Router />
  </TemplateView>
)

export default AppClient
