import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'Sign_In':
            return {
                token: action.payload,
                errorMessage: ''
            };
        case 'Sign_Up':
            return {
                token: action.payload,
                errorMessage: ''
            };
        case 'Add_Error':
            return {
                token: null,
                errorMessage: action.payload
            };
        case 'Clear_Error_Message':
            return {
                ...state,
                errorMessage: ''
            }
        case 'Sign_Out':
            return {
                token: null,
                errorMessage: ''
            };
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'Sign_In', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}

const signup = dispatch => async ({ email, password }) => {
    try {
        let response = await trackerApi.post('/auth/signup', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'Sign_Up', payload: response.data.token })
        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'Add_Error', payload: "Something went wrong with sign up!" })

    }
};


const signin = dispatch => async ({ email, password }) => {
    try {
        let response = await trackerApi.post('/auth/login', {
            email,
            password
        })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'Sign_In', payload: response.data.token })
        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'Add_Error', payload: "Something went wrong with sign in!" })

    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'Clear_Error_Message' });
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'Sign_Out' });
    navigate('loginFlow');
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {
        tryLocalSignin,
        signup,
        signin,
        clearErrorMessage,
        signout
    },
    {
        token: null,
        errorMessage: ''
    }
);