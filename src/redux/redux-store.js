import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import announsementReduser from './announsmentReducer';
import infoReduser from './infoReduser';
import newsReduser from './newsReduser';
import matinReduser from './mainReduser';
import authReduser from './authReducer';
import jobReduser from './jobReduser';
import birthdayReduser from './birthdayReduser';
import { reducer as formReducer } from 'redux-form';
import corpLiveReduser from './corpLiveReduser';
import thunkMiddleWare from 'redux-thunk';
import competitionReduser from './competitionReduser';
import likesReduser from './likesReduser';
import bestLogoReduser from './bestLogo';
import tournamentReduser from './tournamentReduser';
import visitCounterReduser from './visitCounterReduser';

let reducers = combineReducers({
    mainPage: matinReduser,
    AnnounsmentsPage: announsementReduser,
    infoPage: infoReduser,
    newsPage: newsReduser,
    auth: authReduser,
    jobPage: jobReduser,
    form: formReducer,
    corpLivePage: corpLiveReduser,
    birthdayPage: birthdayReduser,
    competition: competitionReduser,
    likes: likesReduser,
    bestLogo: bestLogoReduser,
    tournamentPage: tournamentReduser,
    visitCounter: visitCounterReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.__store__ = store;

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
// window.store = store;

export default store; 