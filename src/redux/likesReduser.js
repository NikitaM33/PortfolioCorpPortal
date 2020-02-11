import { corpLifeAPI } from '../api/api';

const SET_TOTAL_LIKES = 'SET_TOTAL_LIKES';

let initialState = {
    totalLikes: 0
}

const likesReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOTAL_LIKES:
            return {
                ...state,
                totalLikes: action.likes
            }

        default:
            return state;
    }
}

const setTotalLikes = (likes) => ({type: SET_TOTAL_LIKES, likes});

// Thunk

export const getTotalLikes = () => {
    return (dispatch) => {
        corpLifeAPI.getImages()
        .then(response => {
            dispatch(setTotalLikes(response.data));
        });
    };
};

export default likesReduser;