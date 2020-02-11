import { corpLifeAPI } from '../api/api';

const COMPETITION_IMG = 'COMPETITION_IMG';
const NEW_COMPETITION_LIKES = 'NEW_COMPETITION_LIKES';
const GET_COMPETITION_IMG_REQUEST = 'GET_COMPETITION_IMG_REQUEST';
const GET_COMPETITION_IMG_SUCCESS = 'GET_COMPETITION_IMG_SUCCESS';
const TOGGLE_DISABLED_LIKE = "TOGGLE_DISABLED_LIKE";

let initialState = {
    competitionImg: [],
    totalLikes: 0,
    fetching: false
}


const competitionReduser = (state = initialState, action) => {
    switch(action.type) {
        case GET_COMPETITION_IMG_REQUEST:
            return {
                ...state,
                fetching: true
            }

        case GET_COMPETITION_IMG_SUCCESS:
            return {
                ...state,
                fetching: false
            }

        case COMPETITION_IMG:
            return {
                ...state,
                competitionImg: action.image
            }

        case NEW_COMPETITION_LIKES:
            return {
                ...state,
                competitionImg: action.likes,
                totalLikes: action.likes
            }

        case TOGGLE_DISABLED_LIKE:
            return {
                ...state,
                likeDisable: action.disabled
            }

        default:
            return state
    }
}

const competitionImgAC = (image) => ({type: COMPETITION_IMG, image});
const updateLikes = (likes) => ({type: NEW_COMPETITION_LIKES, likes});
export const toggleDisabled = (disabled) => ({type: TOGGLE_DISABLED_LIKE, disabled});

// Thunk

export const setCompetitionImg = () => {
    return (dispatch) => {
        corpLifeAPI.getImages()
        .then(response => {
            dispatch(competitionImgAC(response.data))
        });
    };
};

export const updateCompetitionLikes = (competitionId, loacalState) => {
    return (dispatch) => {
        corpLifeAPI.updateCompetition(competitionId, loacalState)
        .then(response => {
            if(Array.isArray(response.data) == true) {
                dispatch(updateLikes(response.data));
            };
        });
    };
};

export const setNewLikesValue = () => {
    return (dispatch) => {
        corpLifeAPI.getImages()
        .then(response => {
            dispatch(competitionImgAC(response.data));
        });
    };
};



export default competitionReduser;