import { useState } from "react"
import {  Pressable, StyleSheet, Text, View } from "react-native"
import {Button} from 'react-native-paper'
import { PrimaryButton } from "../components";
import { globalStyles } from "../../theme/global.styles";
import {FAB} from 'react-native-paper';

export const CounterScreen = () => {
    const [count, setCounter] = useState(0);
    const Sumar = () => {
        setCounter(count + 1);
    }
    return (


        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>

    
        <FAB
        label="+1"
        onPress={() => Sumar()}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fab}
        />

        </View>



    )
}


