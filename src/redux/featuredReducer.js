import * as ActionTypes from './ActionTypes';

export const FeaturedReducer = (state = {
    isLoading: false,
    errMsg: null,
    featured: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_FEATURED:
            return {isLoading: true, errMsg: null, featured: []}
        case ActionTypes.ADD_FEATURED:
            return {isLoading: false, errMsg: null, featured: action.payload}
        case ActionTypes.FEATURED_FAILED:
            return {isLoading: false, errMsg: action.payload, featured: []}
        default:
            return state
    }
}
