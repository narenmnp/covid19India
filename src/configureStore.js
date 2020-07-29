import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer, initialState } from './rootReducer.js';
import { HTTP_SERVER_URL } from '../src/config/axiosConfig';

let configureStore = createStore(
    rootReducer, //custom reducers
    initialState,
    applyMiddleware(
        axiosMiddleware(HTTP_SERVER_URL), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
    )
)

export default configureStore;
