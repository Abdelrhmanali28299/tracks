import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />

            <NavLink
                textOfLink="Don't have an account? Go back and sign up."
                targetScreen="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    }
});

export default SigninScreen;