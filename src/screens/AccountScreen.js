import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Spacer>
                <View style={styles.titleStyle}>
                    <Text h3>Account Screen</Text>
                </View>
            </Spacer>

            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleStyle: {
        alignItems: "center",
        marginBottom: 200
    }
});

export default AccountScreen;