import { visitorsCountAPI } from '../api/api';

const SET_PAGE_LIST = "SET_PAGE_LIST";
const NEW_STATE_VALUES = "NEW_STATE_VALUES";

let initialState = {
    pageCounter: []
}

const visitCounterReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGE_LIST:
            return {
                ...state,
                pageCounter: action.pageCount
            }

        case NEW_STATE_VALUES:
            return {
                ...state,
                pageCounter: action.stateValues
            }

        default:
            return state;
    }
}

const setPageList = (pageCount) => ({type: SET_PAGE_LIST, pageCount});
const newStateValues = (stateValues) => ({type: NEW_STATE_VALUES, stateValues})

// thunk creator

export const getPageCounter = () => {
    return (dispatch) => {
        visitorsCountAPI.requirePageCount()
        .then(response => {
            dispatch(setPageList(response.data));
        });
    };
};

export const updateCounter = (counterId, newCounterValues) => {
    return (dispatch) => {
        visitorsCountAPI.updateCounterValues(counterId, newCounterValues)
        .then(response => {
            if(Array.isArray(response.data) == true){
                dispatch(newStateValues(response.data));
            }
        });
    };
};

export default visitCounterReduser;