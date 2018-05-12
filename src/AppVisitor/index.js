import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'

/**
  * Template Components.
  */
import NavBar from './Containers/NavBar'
import Footer from './Components/Footer'

/**
  * Pages.
  */
import HomePage from './Pages/Home'
import AccountLoginPage from './Pages/Account/Login'
import AccountRegisterpage from './Pages/Account/Register'
import { PageNotFound } from './Pages/ErrorPage'

const TemplateView = ({children}) => (
  <div className="containerAppVisitor">
    <NavBar />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
)

const Router = () => (
  <Switch>
    <Route path="/site" exact component={HomePage} />
    <Route path="/site/account/register" component={AccountRegisterpage} />
    <Route path="/site/account/login" component={AccountLoginPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const AppVisitor = props => {
  const onClick = () => {
    props.actions.loaderShow()
  }

  return (
    <TemplateView>
      <Router />
    </TemplateView>
  )
}

export default withApp(AppVisitor)
