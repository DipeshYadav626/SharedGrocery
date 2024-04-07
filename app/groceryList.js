import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Stack } from 'expo-router';

export default function GroceryList(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Grocery List</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Item 1" />
                <TextInput style={styles.input} placeholder="Item 2" />
                <TextInput style={styles.input} placeholder="Item 3" />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => console.log('Pressed 1')}>
                    <Text style={styles.buttonText}>Pressable 1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => console.log('Pressed 2')}>
                    <Text style={styles.buttonText}>Pressable 2</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => console.log('Pressed 3')}>
                    <Text style={styles.buttonText}>Pressable 3</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => console.log('Pressed 4')}>
                    <Text style={styles.buttonText}>Pressable 4</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => console.log('Pressed 5')}>
                    <Text style={styles.buttonText}>Pressable 5</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 200,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
