import React, { Component } from 'react'
import './styles.css'

const BigPanel = ({children}) => (
  <div className="bigPanel">
    {children}
  </div>
)

export const SplitPanel = ({children}) => (
  <div className="panel splitPanel">
    {children}
  </div>
)

export const LinkPanel = ({title}) => (
  <a href="#" className="panelBtn">
    <span>{title}</span>
  </a>
)

export default BigPanel
