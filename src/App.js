import React, { Component } from 'react';
import { AppWrapper } from '@bt/Wrapper/AppWrapper'
import globalData from './globalData'
import Home from '@pg/Home'
import Loader, { loaderShow, loaderHide } from '@bt/Loader'
import translate from '@bt/Providers/Translate'

const actions = {
  loaderShow: loaderShow,
  loaderHide: loaderHide,
  translate: translate
}

export default () => (
  <AppWrapper data={globalData} actions={actions}>
    <Loader/>
    <Home />
  </AppWrapper>
)
