const UPDATE_ADD = 'UPDATE_ADD';
const ADD_TEXT = 'ADD_TEXT';
const SET_USERS = 'SET_USERS';

let initialState = {
    newAnnounsment: [],
    users: [],
    id: '1',
    pageSize: 10,
    isFetching: true,
    name: '',
    announsmentName: '',
    newAddText: ''
};

const announsementReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            let newAnnounsment = {
                id: state.id,
                name: 'It`s me! Mario!',
                headline: state.headline,
                content: state.newAddText
            };

            let stateCopy = {
                ...state,
                newAnnounsment: [...state.newAnnounsment, newAnnounsment]
            }
        return stateCopy;

        case UPDATE_ADD:
            return {
                ...state,
                newAddText: action.updateAdd
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        default: return state;
    };
};

export const updateNewAddText = (updateAdd) => ({type: UPDATE_ADD, updateAdd});
export const addText = (text) => ({type: ADD_TEXT, text});
export const setUsers = (users) => ({type: SET_USERS, users});

export default announsementReduser;