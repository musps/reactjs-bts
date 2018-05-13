import React, { Component } from 'react';
import './index.css'

import SideBar from './Containers/SideBar'
import FakeContent from './FakeContent'

const TemplateView = ({children}) => (
  <div className="containerAppClient">
    <SideBar />
    <div className="content">
      {children}
    </div>
  </div>
)

const AppClient = () => (
  <TemplateView>
    <FakeContent />
  </TemplateView>
)

export default AppClient
