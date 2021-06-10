import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Header from './component/Header'
import ListItem from './component/ListItem'

const App = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      text: 'HTML'
    },
    {
      id: 2,
      text: 'CSS'
    },
    {
      id: 3,
      text: 'JS'
    },
    {
      id: 4,
      text: 'JAVA'
    }
  ])
  const deleteItem = (id) => {
    setItem(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }
  return (
    <>
      <View style={styles.container}>
        <Header />
        <FlatList data={items} renderItem={({ item }) =>
          (<ListItem item={item} deleteItem={deleteItem} />)} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})

export default App
