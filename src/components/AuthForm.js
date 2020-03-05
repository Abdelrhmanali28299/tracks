import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <View style={{ alignItems: "center" }}>
                    <Text h3>{headerText} for Tracker</Text>
                </View>
            </Spacer>
            <Input
                label="Email"
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {
                errorMessage !== '' ? (
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                ) : null
            }

            <Spacer>
                <Button
                    title={headerText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginBottom: 15
    },
    link: {
        color: "blue"
    }
});

export default AuthForm;