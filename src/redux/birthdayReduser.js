import { greetingAPI } from '../api/api';
import imgLarge from '../img/greetingPhotos/p7L.jpg';
import imgSmall from '../img/greetingPhotos/p7S.jpg';
import imgLarge2 from '../img/greetingPhotos/p5L.jpg';
import imgSmall2 from '../img/greetingPhotos/p5S.jpg';
import imgLarge3 from '../img/greetingPhotos/p1L.jpg';
import imgSmall3 from '../img/greetingPhotos/p1S.jpg';
import imgLarge4 from '../img/greetingPhotos/p3L.jpg';
import imgSmall4 from '../img/greetingPhotos/p3S.jpg';
import imgLarge5 from '../img/greetingPhotos/p2L.jpg';
import imgSmall5 from '../img/greetingPhotos/p2S.jpg';
import imgLarge6 from '../img/greetingPhotos/p4L.jpg';
import imgSmall6 from '../img/greetingPhotos/p4S.jpg';

const SET_GREETING_PHOTO = 'SET_GREETING_PHOTO';
const SET_BIRTHDAY_TODAY = 'SET_BIRTHDAY_TODAY';
const PERSON_BIRTHDAY = "internalPortal/birthdayPage/PERSON_BIRTHDAY";
const SET_FINDED_PERSON = "internalPortal/birthdayPage/SET_FINDED_PERSON";

let initialState = {
    birthdayPhotosList: [
        {
            lastName: "Mr.",
            name: "Smith",
            secondName: "",
            fullBirthDate: "20.02.2020",
            depart: "Юрист",
            city: "",
            dateOfBirthday: "20.02",
            dayOfBirthday: 20,
            monthOfBirthday: 2,
            img: imgSmall,
            imgBig: imgLarge,
            created: "2020-02-05T08:06:13.955Z"
        },

        {
            lastName: "Mrs.",
            name: "Smith",
            secondName: "",
            fullBirthDate: "11.02.2020",
            depart: "Актриса",
            city: "",
            dateOfBirthday: "11.02",
            dayOfBirthday: 11,
            monthOfBirthday: 2,
            img: imgSmall2,
            imgBig: imgLarge2,
            created: "2020-02-05T08:06:13.955Z"
        },

        {
            lastName: "Mr.",
            name: "Smith",
            secondName: "",
            fullBirthDate: "20.02.2020",
            depart: "Политик",
            city: "",
            dateOfBirthday: "20.02",
            dayOfBirthday: 20,
            monthOfBirthday: 2,
            img: imgSmall3,
            imgBig: imgLarge3,
            created: "2020-02-05T08:06:13.955Z"
        },

        {
            lastName: "Mr.",
            name: "Smith",
            secondName: "Скала",
            fullBirthDate: "27.02.2020",
            depart: "Рестлер и актер",
            city: "",
            dateOfBirthday: "27.02",
            dayOfBirthday: 27,
            monthOfBirthday: 2,
            img: imgSmall4,
            imgBig: imgLarge4,
            created: "2020-02-05T08:06:13.955Z"
        },

        {
            lastName: "Mrs.",
            name: "Smith",
            secondName: "",
            fullBirthDate: "12.02.2020",
            depart: "Певица",
            city: "",
            dateOfBirthday: "12.02",
            dayOfBirthday: 12,
            monthOfBirthday: 2,
            img: imgSmall5,
            imgBig: imgLarge5,
            created: "2020-02-05T08:06:13.955Z"
        },

        {
            lastName: "Mr.",
            name: "Smith",
            secondName: "",
            fullBirthDate: "28.02.2020",
            depart: "Отдел безопасности",
            city: "",
            dateOfBirthday: "28.02.2020",
            dayOfBirthday: 28,
            monthOfBirthday: 2,
            img: imgSmall6,
            imgBig: imgLarge6,
            created: "2020-02-05T08:06:13.955Z"
        }
    ],
    celebratingToday: []
}

const birthdayReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_GREETING_PHOTO:
        case SET_FINDED_PERSON:
            return {
                ...state,
                birthdayPhotosList: action.photo
            }

        case SET_BIRTHDAY_TODAY:
            return {
                ...state,
                celebratingToday: action.birthdayToDayData
            }

        case PERSON_BIRTHDAY:
            return {
                ...state,
                birthdayPhotosList: {...state.birthdayPhotosList, img: action.personBirthday}
            }

        default:
            return state;
    }
}

const setPhotos = (photo) => ({type: SET_GREETING_PHOTO, photo});
const setBirthdayToday = (birthdayToDayData) => ({type: SET_BIRTHDAY_TODAY, birthdayToDayData});
const savePersonBirthday = (personBirthday) => ({type: PERSON_BIRTHDAY, personBirthday});
const setFindedPerson = (findedPerson) => ({type: SET_FINDED_PERSON, findedPerson});

// ========= Thunk

export const setGreetingPhotos = () => async (dispatch) => {
    try{
        let response = await greetingAPI.setGreetingPhotos();
        if(Array.isArray(response.data) == true) {
            dispatch(setPhotos(response.data));
        }
    } catch (error) {
        alert('Some error in setGreetingPhotos')
    }
};

export const setTodayBirthday = () => async (dispatch) => {
    try {
        let response = await greetingAPI.getTodayCelebro();
        if(Array,isFinite(response.data)) {
            dispatch(setBirthdayToday(response.data));
        }
    } catch (error) {
        alert('Some error in setTodayBirthday')
    }
};

export const saveNewPersonBD = (birthdayData) => async (dispatch) => {
    try {
        let response = await greetingAPI.saveBirthday(birthdayData);
        if(Array.isArray(response.data)) {
            dispatch(savePersonBirthday(response.data));
        }
    } catch (error) {
        alert('Some error in saveNewPersonBD')
    }
};

export const findEddingPerson = (personData) => async (dispatch) => {
    try {
        let response = await greetingAPI.findPerson(personData);
        dispatch(setFindedPerson(response.data));
    } catch (error) {
        console.log('There is some error in findEddingPerson' + error)
    }
}

export default birthdayReduser;