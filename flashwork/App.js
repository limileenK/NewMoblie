import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
// import Tabbar from './component/Tabbar'
import Main from './screen/Main'
import Gray from './screen/Gray'
import Red from './screen/Red'
import Blue from './screen/Blue'
import Model from './screen/Model'
import Profile from './screen/Profile';
const TabIcon = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}

const App = () => {
  return (
    <>

      <Router >
        <Scene key="root" hideNavBar={true} >

          <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>

            <Scene key="gray" component={Gray} title="Gray" icon={TabIcon} />
            <Scene key="red" component={Red} title="Red" icon={TabIcon} />
            <Scene key="Main" title='HOME' hideNavBar={true} component={Main} icon={TabIcon} />
            <Scene key="blue" component={Blue} title="Blue" icon={TabIcon} />
            <Scene key="profile" component={Profile} title="Profile" icon={TabIcon} hideNavBar={true} initial={true} />
          </Scene>
          <Scene key="model" component={Model} title="Model" direction="vertical" hideNavBar />
        </Scene>
      </Router>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }

})

export default App
