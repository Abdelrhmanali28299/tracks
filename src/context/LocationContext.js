import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'Change_Name':
            return {
                ...state,
                name: action.payload
            };
        case 'Add_Current_Location':
            return {
                ...state,
                currentLocation: action.payload
            };
        case 'Add_Location':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            };
        case 'Start_Recording':
            return {
                ...state,
                recording: true
            };
        case 'Stop_Recording':
            return {
                ...state,
                recording: false
            };
        case 'Reset':
            return {
                ...state,
                recording: false,
                locations: [],
                name: ''
            };
        default:
            return state;
    }
};

const changeName = dispatch => (name) => {
    dispatch({ type: 'Change_Name', payload: name })
}

const startRecording = dispatch => () => {
    dispatch({ type: 'Start_Recording' });
};

const stopRecording = dispatch => () => {
    dispatch({ type: 'Stop_Recording' });
};

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'Add_Current_Location', payload: location });
    if (recording) {
        dispatch({ type: 'Add_Location', payload: location });
    }
}

const reset = dispatch => () => {
    dispatch({ type: 'Reset' })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation,
        changeName,
        reset
    },
    {
        name: '',
        recording: false,
        locations: [],
        currentLocation: null
    }
);