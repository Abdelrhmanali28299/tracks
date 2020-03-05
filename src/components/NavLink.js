import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ textOfLink, navigation, targetScreen }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(targetScreen)
            }}
        >
            <Spacer>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.link}>
                        {textOfLink}
                    </Text>
                </View>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue"
    }
});

export default withNavigation(NavLink);