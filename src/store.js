import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducers from './reducers';

export default () => {
    const store = createStore(rootReducers, applyMiddleware(logger));

    return store;
};
