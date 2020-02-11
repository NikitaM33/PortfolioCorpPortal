// News Page ===================
export const getNews = (state) => {
    return state.newsPage.news;
};

export const getImgInput = (state) => {
    return state.newsPage.imgInput;
};


// Birthday Page ====================
export const getBirthdayPhoto = (state) => {
    return state.birthdayPage.birthdayPhotosList
};

export const getBirthdayToday = (state) => {
    return state.birthdayPage.celebratingToday
};

export const getPersonBirthday = (state) => {
    return state.birthdayPage.personBirthday
};

// export const getEditMod = (state) => {
//     return state.birthdayPage.editMode
// }


// Corp live page ====================
export const getSliderImages = (state) => {
    return state.corpLivePage.sliderImages
};

export const getVideo = (state) => {
    return state.corpLivePage.video
};

export const takeOtherVideo = (state) => {
    return state.corpLivePage.otherVideo
};