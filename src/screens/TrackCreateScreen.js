import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import useLocation from '../hooks/useLocation'
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording)
    }, [state.recording])
    const [err] = useLocation(isFocused || state.recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <View style={styles.titleStyle}>
                <Text h2>
                    Create Track
                    </Text>
            </View>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleStyle: {
        alignItems: "center"
    }
});

export default withNavigationFocus(TrackCreateScreen);