import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />

            <NavLink
                textOfLink="Already have an account? Sign in instead."
                targetScreen="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },
    link: {
        color: "blue"
    }
});

export default SignupScreen;