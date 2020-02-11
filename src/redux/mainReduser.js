import { mainPageAPI } from '../api/api';

const SET_VIDEO_GREETING = "SET_VIDEO_GREETING";

let initialState = {
    historyOne: [
        {
            number: '1',
            date: '29 августа 2021',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        },

        {
            number: '2',
            date: '23 июня 2025',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        },

        {
            number: '3',
            date: '12 января 2030',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        }
    ],

    historyTwo: [
        {
            number: '4',
            date: '19 сентября 2031',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        },

        {
            number: '5',
            date: '30 сентября 2035',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        },

        {
            number: '6',
            date: '11 января 2038',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, suscipit unde ipsum explicabo voluptatibus id?'
        }
    ],
    videoGreeting: null
}

const matinReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_VIDEO_GREETING:
            return {
                ...state,
                videoGreeting: action.video
            }
    
        default:
            return state;
    }
}

const setVideoGreeting = (video) => ({type: SET_VIDEO_GREETING, video});

export const getVideoGreeting = () => (dispatch) => {
    mainPageAPI.getGreetingVideo()
    .then(response => {
        dispatch(setVideoGreeting(response.data));
    });
};

export default matinReduser;