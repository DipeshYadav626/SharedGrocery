import { View, Text, StyleSheet } from "react-native"
import { Stack } from "expo-router"

export default function roomMate( props ) {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true }}/>
            <Text>Room Mate</Text>
        </View>
    )
}