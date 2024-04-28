import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { AuthenticationForm } from "../components/AuthenticationForm";
import { AlternateAuth } from "../components/AlternateAuth";
import { Theme } from "../theme/Theme";
import { AuthContext } from "../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { router } from "expo-router";

export default function Register(props) {
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (auth.currentUser) {
            router.replace('/home');
        }
    });

    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                router.push('/home');
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.ImageBackground} source={require("../assets/img.jpg")}>
            <AuthenticationForm title="Register for an account" action="Sign up" handler={createAccount} />
            <AlternateAuth 
                text="Already have an account?"
                route="/login" 
                linkText="Login" 
            />
        </ImageBackground>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex:1,
        justifyContent: 'center'
    },
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: Theme.primaryLight,
        justifyContent: "center",
    },
});
