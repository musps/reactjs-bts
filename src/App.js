import React, { Component } from 'react';
import { AppWrapper } from '@bt/Wrappers/AppWrapper'
import globalData from './globalData'
import Home from '@pg/Home'
import Loader, { loaderShow, loaderHide } from '@bt/Components/Loader'
import translate from '@bt/Providers/Translate'
import './App.css'
import SideBar from '@bt/Components/SideBar'

const actions = {
  loaderShow: loaderShow,
  loaderHide: loaderHide,
  translate: translate
}

export default () => (
  <AppWrapper data={globalData} actions={actions}>
    {/* Global tools */}
    <Loader/>
    {/* App */}
    <Home />
  </AppWrapper>
)
