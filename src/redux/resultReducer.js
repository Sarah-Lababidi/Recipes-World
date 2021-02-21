import * as ActionTypes from './ActionTypes';

export const ResultReducer = (state = {
    isEmpty: false,
    isLoading: false,
    errMsg: null,
    result: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_RESULT:
            return {isLoading: true, errMsg: null, result: [], isEmpty: false}
        case ActionTypes.ADD_RESULT:
            return {isLoading: false, errMsg: null, result: action.payload, isEmpty: false}
        case ActionTypes.RESULT_FAILED:
            return {isLoading: false, errMsg: action.payload, result: [], isEmpty: false}
        case ActionTypes.CLEAR_RESULTS:
            return {isLoading: false, errMsg: null, result: action.payload, isEmpty: false}
        case ActionTypes.EMPTY_RESULT:
            return {isLoading: false, errMsg: null, result: [], isEmpty: true}
        default:
            return state
    }
}