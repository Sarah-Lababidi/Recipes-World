import { createStore, combineReducers, applyMiddleware } from 'redux';
import { FeaturedReducer } from './featuredReducer';
import { ResultReducer } from './resultReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            featuredState: FeaturedReducer,
            resultState: ResultReducer
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}