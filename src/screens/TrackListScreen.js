import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents
                onWillFocus={fetchTracks}
            />
            <FlatList
                data={state}
                keyExtractor={location => location._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                        >
                            <ListItem
                                chevron
                                title={item.name}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks'
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default TrackListScreen;