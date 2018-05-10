import React, { Component } from 'react';
import { AppWrapper } from '@bt/Wrappers/AppWrapper'
import globalData from './globalData'
import Loader, { loaderShow, loaderHide } from '@bt/Components/Loader'
import translate from '@bt/Providers/Translate'
import './App.css'

import AppVisitor from '@/AppVisitor'
import AppClient from '@/AppClient'

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
    <AppVisitor />
  </AppWrapper>
)
