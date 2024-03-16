import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name: string;
}

export const HelloWordPageScreen = ({name = "World"} : Props) => {
  return (
    <View style={stlyes.container}>
       <Text numberOfLines={1}  style={stlyes.title}>Hello {name}</Text>
    </View>
  )
//   ellipsizeMode=''
}

const stlyes = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "red"
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})