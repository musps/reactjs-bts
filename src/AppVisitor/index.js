import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'
import TopBar from './Containers/TopBar'
import Footer from './Components/Footer'
import HomePage from './Pages/Home'

const About = () => (
  <div>
    about
  </div>
)

const TemplateView = ({children}) => (
  <div className="containerAppVisitor">
    <TopBar />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
)

const AppVisitor = props => {

  console.log('AppVisitor', props.history)

  const onClick = () => {
    props.actions.loaderShow()
  }

  return (
    <TemplateView>
      <HomePage />
    </TemplateView>
  )
}

export default withApp(AppVisitor)
