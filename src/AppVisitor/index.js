import React, { Component } from 'react';
import { withApp } from '@bt/Wrappers/AppWrapper'
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'
import TopBar from './Containers/TopBar'


const About = () => (
  <div>
    about
  </div>
)

const TemplateView = () => (
  <div className="containerAppVisitor">
    <TopBar />
    <div className="content">
      content
    </div>
    <footer className="footer">
      footer
    </footer>
  </div>
)

const AppVisitor = props => {

  console.log('AppVisitor', props.history)

  const onClick = () => {
    props.actions.loaderShow()
  }

  return (
    <TemplateView />
  )
}

export default withApp(AppVisitor)
