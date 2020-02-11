import { interviewAPI } from '../api/api';
import img from '../img/p2.jpg'
import img2 from '../img/p3.jpg'
const SET_INTERVIEW = 'SET_INTERVIEW';

const initialState = {
    interview: [
        {
            reporter: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos vel, tempore quidem delectus hic qui ex porro molestias magni voluptatibus mollitia repellat pariatur quasi nam, ab accusamus vero. Aliquid.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos vel, tempore quidem delectus hic qui ex porro molestias magni voluptatibus mollitia repellat pariatur quasi nam, ab accusamus?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
                "Lorem ipsum dolor sit amet?",
                "Lorem ipsum dolor sit amet consectetur adipisicing!"
            ],
            respondent: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt earum consequuntur modi",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt earum consequuntur modi veritatis vero assumenda praesentium, magni sunt expedita iste nam maxime sed libero.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt."
            ],
            imageRespondent: img,
        },

        {
            reporter: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos vel, tempore quidem delectus hic qui ex porro molestias magni voluptatibus mollitia repellat pariatur quasi nam, ab accusamus vero. Aliquid.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos vel, tempore quidem delectus hic qui ex porro molestias magni voluptatibus mollitia repellat pariatur quasi nam, ab accusamus?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
                "Lorem ipsum dolor sit amet?",
                "Lorem ipsum dolor sit amet consectetur adipisicing!"
            ],
            respondent: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt earum consequuntur modi",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt earum consequuntur modi veritatis vero assumenda praesentium, magni sunt expedita iste nam maxime sed libero.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in explicabo maiores nostrum tempore totam impedit quis, commodi quam odio aliquam. Quisquam quod incidunt."
            ],
            imageRespondent: img2,
        }
    ]
}

const tournamentReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_INTERVIEW:
            return {
                ...state,
                interview: action.interview
            }

        default:
            return state
    }
}

const interview = (interview) => ({type: SET_INTERVIEW, interview});

// ThunkReduser

export const getInterview = () => {
    return (dispatch) => {
        interviewAPI.getInterview()
        .then(response => {
            dispatch(interview(response.data));
        });
    };
};

export default tournamentReduser;