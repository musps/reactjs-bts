import React, { Component } from 'react'
import './styles.css'

const InfoPanel = ({children}) => (
  <div className="infoPanel">
    {children}
  </div>
)

export const SubPanelTitle = ({title}) => (
  <div className="panel panelWithTitle">
    <h1>{title}</h1>
  </div>
)

export const SubPanelCaption = ({children}) => (
  <div className="panel panelWithCaption">
    {children}
  </div>
)

export const SubPanelCaptionItem = ({label, icon}) => {
  const iconStyle = {
    backgroundImage: 'url(' + icon + ')'
  }

  return (
    <div className="caption">
      <div className="icon" style={iconStyle}></div>
      <label className="label">
        {label}
      </label>
    </div>
  )
}

export const SubPanelLink = ({href, label}) => (
  <div className="panel panelWithBtn">
    <a href="{href}">{label}</a>
  </div>
)

export const SubPanel = ({children, title, linkLabel}) => (
  <div className="subPanel">
    {title !== null &&
      <SubPanelTitle title={title} />
    }
    <SubPanelCaption>
      {children}
    </SubPanelCaption>
    <SubPanelLink href='#' label={linkLabel} />
  </div>
)

export default InfoPanel
