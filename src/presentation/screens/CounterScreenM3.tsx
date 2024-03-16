import { useState } from "react"
import {  Pressable, StyleSheet, Text, View } from "react-native"
import {Button} from 'react-native-paper'
import { PrimaryButton } from "../components";

export const CounterScreen = () => {
    const [count, setCounter] = useState(0);
    const Sumar = () => {
        setCounter(count + 1);
    }
    return (


        <View style={style.container}>
            <Text style={style.title}>{count}</Text>

    
            <Button
                onPress={() => Sumar()}
                onLongPress={() => setCounter(0)}
            >
            Incrementar
            </Button>
        </View>



    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },

})