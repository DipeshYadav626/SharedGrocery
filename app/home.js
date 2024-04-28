import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../contexts/AuthContext'; // Import your AuthContext here

export default function Home(props) {
    const router = useRouter();
    const auth = useContext(AuthContext); // Assuming AuthContext provides a signOut function
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSignIn = () => {
        // Implement sign-in logic here
        router.push('/login');
        setMenuOpen(false);
    };

    const handleSignOut = () => {
        auth.signOut() // Call the signOut function from AuthContext
            .then(() => {
                router.push('/');
                setMenuOpen(false);
            })
            .catch(error => {
                console.error('Sign out error:', error);
            });
    };

    const handleNavigate = (route) => {
        router.push(route);
        setMenuOpen(false);
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require("../assets/img.jpg")}>
                <View style={styles.header}>
                    <Ionicons
                        name={menuOpen ? 'close' : 'menu'}
                        size={24}
                        color="black"
                        style={styles.menuIcon}
                        onPress={handleMenuToggle}
                    />
                    <Text style={styles.title}>Shared Grocery List</Text>
                </View>
            </ImageBackground>

            {menuOpen && (
                <View style={styles.dropdown}>
                    <Pressable style={styles.menuItem} onPress={handleSignIn}>
                        <Text style={styles.menuText}>Sign In</Text>
                    </Pressable>
                    <Pressable style={styles.menuItem} onPress={handleSignOut}>
                        <Text style={styles.menuText}>Sign Out</Text>
                    </Pressable>
                </View>
            )}
            <View style={styles.middle}>
                <Pressable style={styles.button} onPress={() => handleNavigate('/groceryList')}>
                    <Text style={styles.buttonText}>Grocery List</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/roomMate')}>
                    <Text style={styles.buttonText}>Room Mate</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/bills')}>
                    <Text style={styles.buttonText}>Bills</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNavigate('/profile')}>
                    <Text style={styles.buttonText}>Profile</Text>
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
        backgroundColor: '#e0d6b8',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuIcon: {
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1, // Allow title to take remaining space
    },
    dropdown: {
        position: 'absolute',
        top: 60, // Adjust the top position as needed
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        zIndex: 1,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuText: {
        fontSize: 16,
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
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
    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        
    },
});
