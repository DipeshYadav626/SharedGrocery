import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Stack } from 'expo-router';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={styles.title}>Shared GroceryList</Text>
            <Pressable style={styles.button} onPress={() => console.log('Pressed 1')}>
                <Text style={styles.buttonText}>Grocery List</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log('Pressed 2')}>
                <Text style={styles.buttonText}>Room Mate</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log('Pressed 3')}>
                <Text style={styles.buttonText}>Bills</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log('Pressed 4')}>
                <Text style={styles.buttonText}>Profile</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
