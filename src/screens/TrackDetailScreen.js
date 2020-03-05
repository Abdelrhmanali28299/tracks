import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(track => track._id === _id);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Spacer>
                <View style={styles.titleStyle}>
                    <Text h4>
                        {track.name}
                    </Text>
                </View>
            </Spacer>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    ...track.locations[0].coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    ...track.locations[0].coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapStyle: {
        height: 300
    },
    titleStyle: {
        alignItems:"center"
    }
});

export default TrackDetailScreen;