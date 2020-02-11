import { corpLifeAPI } from '../api/api';

const GET_BEST_LOGO = "GET_BEST_LOGO";
const UPDATE_LOGO_LIKES = "UPDATE_LOGO_LIKES";

const initialState = {
    logoImg: []
}

const bestLogoReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEST_LOGO:
            return {
                ...state,
                logoImg: action.bestLogo
            }
        case UPDATE_LOGO_LIKES:
            return {
                ...state,
                logoImg: action.logoLikes
            }
        default:
            return state
    }
};

const getBestLogo = (bestLogo) => ({type: GET_BEST_LOGO, bestLogo});
const updateLogoLikes = (logoLikes) => ({type: UPDATE_LOGO_LIKES, logoLikes});


// Thunk creator

export const setBestLogo = () => {
    return (dispatch) => {
        corpLifeAPI.getLogo()
        .then(response => {
            dispatch(getBestLogo(response.data));
        });
    };
};

export const updateCompetitionLogoLikes = (competitionId, loacalState) => {
    return (dispatch) => {
        corpLifeAPI.updateCompetition(competitionId, loacalState)
        .then(response => {
            if(Array.isArray(response.data) == true) {
                dispatch(updateLogoLikes(response.data));
            };
        });
    };
};

export const setNewLogoLikes = () => {
    return (dispatch) => {
        corpLifeAPI.getLogo()
        .then(response => {
            dispatch(getBestLogo(response.data));
        });
    };
};

// export const changeNameOfCompetition = () => {
//     return (dispatch) => {
//          (response => {
//             dispatch( (response.data))
//         })
//     }
// }

export default bestLogoReduser;