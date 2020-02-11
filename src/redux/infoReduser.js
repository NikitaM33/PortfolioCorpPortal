import { announsAPI, PedistalAPI, NewWorkerAPI } from '../api/api';
import p1 from '../img/NewWorker/p1.jpeg';
import p2 from '../img/NewWorker/p2.jpeg';
import p3 from '../img/NewWorker/p3.jpeg';

const SET_NEW_WORKERS = 'SET_NEW_WORKERS';
const SET_LEADERS_PLACE = 'SET_LEADERS_PLACE';
const SET_ANNOUNSE = 'SET_ANNOUNSE';

let initialState = {
    pedestal: [
        {
            _id: 1,
            place: 1,
            firstName: "Wain",
            secondName: "",
            lastName: "Bruce",
            fees: "98 Млрд",
            groupNumber: "1",
            playground: "Gotham"
        },

        {
            _id: 2,
            place: 2,
            firstName: "Luthor",
            secondName: "",
            lastName: "Lex",
            fees: "80 Млрд",
            groupNumber: "1",
            playground: "Metropolis"
        },
        
        {
            _id: 3,
            place: 3,
            firstName: "Quin",
            secondName: "",
            lastName: "Oliver",
            fees: "7 Млрд",
            groupNumber: "1",
            playground: "Starling City"
        }
    ],
    totalAnnounsCount: 0,
    isFetching: true,
    announsments: [
        {
            breackingNews: "Lorem ipsum dolor sit amet.",
            newsText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus ipsa veritatis tempora temporibus labore error voluptatibus dicta, vero est deserunt odio ex ab maxime provident atque iusto dignissimos, praesentium, magni necessitatibus iure pariatur? Consequuntur ipsam repudiandae accusamus, laborum, magni quod nemo sequi et ut consequatur sapiente placeat pariatur quam!",
            date: ""
        },
        
        {
            breackingNews: "Lorem ipsum dolor sit amet.",
            newsText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus ipsa veritatis tempora temporibus labore error voluptatibus dicta, vero est deserunt odio ex ab maxime provident atque iusto dignissimos, praesentium, magni necessitatibus iure pariatur? Consequuntur ipsam repudiandae accusamus, laborum, magni quod nemo sequi et ut consequatur sapiente placeat pariatur quam!",
            date: ""
        },

        {
            breackingNews: "Lorem ipsum dolor sit amet.",
            newsText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus ipsa veritatis tempora temporibus labore error voluptatibus dicta, vero est deserunt odio ex ab maxime provident atque iusto dignissimos, praesentium, magni necessitatibus iure pariatur? Consequuntur ipsam repudiandae accusamus, laborum, magni quod nemo sequi et ut consequatur sapiente placeat pariatur quam!",
            date: ""
        }
    ],
    newWorkersList: [
        {
            firstName: "mr.",
            lastName: "Smith",
            introdusing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum temporibus, maiores et quia culpa natus provident itaque unde dolor?",
            img: p1,
            imgBig: p1
        },

        {
            firstName: "ms.",
            lastName: "Smith",
            introdusing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum temporibus, maiores et quia culpa natus provident itaque unde dolor?",
            img: p2,
            imgBig: p2
        },

        {
            firstName: "mr.",
            lastName: "Smith",
            introdusing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum temporibus, maiores et quia culpa natus provident itaque unde dolor?",
            img: p3,
            imgBig: p3
        }
    ]
}

const infoReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEW_WORKERS:
            return {
                ...state,
                newWorkersList: action.newWorker
            }

        case SET_LEADERS_PLACE:
            return {
                ...state,
                pedestal: action.leadersPlace
            }

        case SET_ANNOUNSE:
            return {
                ...state,
                announsments: action.announs
            }

        default:
            return state;
    }
}

const setNewWorkers = (newWorker) => ({type: SET_NEW_WORKERS, newWorker});
const setLeadersCollectionsPlace = (leadersPlace) => ({type: SET_LEADERS_PLACE, leadersPlace});
const setAnnounsments = (announs) => ({type: SET_ANNOUNSE, announs});


export const setAnnounsment = () => {
    return (dispatch) => {
        announsAPI.getAnnouns()
        .then(response => {
            dispatch(setAnnounsments(response.data));
        });
    };
};

export const getLeaders = () => {
    return (dispatch) => {
        PedistalAPI.getPedistal()
        .then(response => {
            dispatch(setLeadersCollectionsPlace(response.data));
        });
    };
};

export const getNewWorker = () => async (dispatch) => {
    try {
        let response = await NewWorkerAPI.getWorkers();
        dispatch(setNewWorkers(response.data));
    } catch(error) {
        console.log("Error in getNewWorker: " + error)
    }
}


export default infoReduser;