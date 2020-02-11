const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    profile: null,
    id: null,
    email: null,
    login: null,
    isAuth: false
}; 

const profileReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, //тут лежат все свойства из initialState
                isAuth: true
            }
        
            

        default: return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export default profileReduser;