import { View, Text, StyleSheet } from "react-native"
import { Stack } from "expo-router"

export default function Bills( props ) {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true }}/>
            <Text>Bills</Text>
        </View>
    )
}