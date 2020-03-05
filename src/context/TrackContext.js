import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import Toast from 'react-native-root-toast';

const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_Tracks':
            return action.payload;
        default:
            return state;
    }
}

const createTrack = dispatch => async (name, locations, callback) => {
    try {
        await trackerApi.post('/track/tracks', {
            name,
            locations
        });
        let toast = Toast.show('Track is saved.', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });
        callback()
    } catch (error) {
        let toast = Toast.show('You have a problem.', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/track/tracks');
    dispatch({ type: 'Fetch_Tracks', payload: response.data });
}

export const { Context, Provider } = createDataContext(TrackReducer, {
    fetchTracks,
    createTrack
}, [])