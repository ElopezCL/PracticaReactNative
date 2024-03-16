import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { HelloWordPageScreen } from './src/presentation/screens/HelloWordPageScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import IonIcon from 'react-native-vector-icons'

export const App = () => {
  return (
    <PaperProvider
      // settings={{
      //   icon: (props) => <IonIcon {...props}/>
      // }}
    >
    <SafeAreaView style={{flex:1}}>
      {/* <HelloWordPageScreen name="Github"/> */}

      <CounterScreen/>
    </SafeAreaView>
    </PaperProvider>
  )
}

