import {
    createStore,
} from 'redux';
import reducers from '../reducer/reduxdemo';

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();