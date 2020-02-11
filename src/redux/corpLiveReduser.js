import { corpLifeAPI } from '../api/api';


const SET_ALBUM = "SET_ALBUM";
const SET_SLIDER_IMAGES = "SET_SLIDER_IMAGES";
const SET_VIDEO_FOR_CORP_LIVE = "SET_VIDEO_FOR_CORP_LIVE";
const SET_OTHER_VIDEO = "SET_OTHER_VIDEO";

let initialState = {
    images: null,
    albumCover: null,
    date: null,
    albumName: null,
    sliderImages: [],
    video: [],
    otherVideo: []
}

const corpLiveReduser = ( state = initialState, action ) => {
    switch(action.type){
        case SET_ALBUM:
            return {
                ...state,
                images: action.images
            }

        case SET_SLIDER_IMAGES:
            return {
                ...state,
                sliderImages: action.slide
            }

        case SET_VIDEO_FOR_CORP_LIVE:
            return {
                ...state,
                video: action.video
            }

        case SET_OTHER_VIDEO:
            return {
                ...state,
                otherVideo: action.otherVideo
            }

        default:
            return state;
    }
}

export const setAlbum = (images) => ({type: SET_ALBUM, images});
const setSliderImages = (slide) => ({type: SET_SLIDER_IMAGES, slide});
export const setVideoForCorpPage = (video) => ({type: SET_VIDEO_FOR_CORP_LIVE, video});
export const setOtherVideo = (otherVideo) => ({type: SET_OTHER_VIDEO, otherVideo});

export const getSlider = () => (dispatch) => {
    corpLifeAPI.getSliderImages()
    .then(response => {
        dispatch(setSliderImages(response.data));
    });
};

export const getVideoForCorpLivePage = () => (dispatch) => {
    corpLifeAPI.getVideo()
    .then(response => {
        dispatch(setVideoForCorpPage(response.data));
    });
};

export const getOtherVideo = () => (dispatch) => {
    corpLifeAPI.getOtherVideo()
    .then(response => {
        dispatch(setOtherVideo(response.data));
    });
};

export default corpLiveReduser;