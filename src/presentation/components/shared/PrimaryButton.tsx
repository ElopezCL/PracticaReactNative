import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress , onLongPress} : Props) => {
    
   
  return (
   
    <Pressable
    style={style.button}
    onPress={() => onPress && onPress()}
    onLongPress={() => onPress && onPress()}
    >
    <Text>Incrementar</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
button:{
  backgroundColor: '#5856D6',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10,
  color: 'white'
},
buttonPressed :{
  backgroundColor: '#4746AB',

}
})