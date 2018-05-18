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
import OrderTrackingPage from './Pages/OrderTracking'
import ProfilCustomerPage from './Pages/Profil/Customer'
import ProfilAgentPage from './Pages/Profil/Agent'
import HistoryCustomerPage from './Pages/History/Customer'
import HistoryAgentPage from './Pages/History/Agent'

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
    <Route path="/app/order_tracking" component={OrderTrackingPage} />
    <Route path="/app/profil/customer" component={ProfilCustomerPage} />
    <Route path="/app/profil/agent" component={ProfilAgentPage} />
    <Route path="/app/history/customer" component={HistoryCustomerPage} />
    <Route path="/app/history/agent" component={HistoryAgentPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const AppClient = () => (
  <TemplateView>
    <Router />
  </TemplateView>
)

export default AppClient
