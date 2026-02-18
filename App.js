import React from 'react'
import StackNav from './SRC/Navigation/StackNav'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
     <StackNav />
    </NavigationContainer>
  )
}

export default App;