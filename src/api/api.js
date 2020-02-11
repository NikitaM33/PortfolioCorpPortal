import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: '/api/'
});

// Юзеры
export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
    },

    getUsersProfile(id) {
        let userId = id;
            if(!userId){
                userId = 2;
            };

        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },

    getAuthUserData() {
        return instance.get(`auth/me/`)
        .then(response => {
                    return response.data
                });
    },

    follow(uid) {
        return instance.post(`follow/${uid}`)
        .then(response => {
            return response.data
        });
    },

    unfollow(uid) {
        return instance.delete(`follow/${uid}`)
        .then(response => {
            return response.data
        });
    }
};

// Пьедистал API ==========================

export const PedistalAPI = {
    getPedistal() {
        return instance.get('leaders')
    }
}

// Новочти
export const newsAPI = {
    getNews() {
        return instance.get(`news`)
    },

    getWallpaperUrlData(uId) {
        return instance.get('news/' + uId)
    },

    updateNews() {
        return instance.get('news')
    },

    sendEmail(value) {
        return instance.post('news', value)
    }
}

// Объявления
export const announsAPI = {
    getAnnouns() {
        return instance.get(`announsments`)
    }
};

// Новые сотрудники
export const NewWorkerAPI = {
    getWorkers() {
        return instance.get('newWorker')
    }
}

// Поздравления с днюхой
export const greetingAPI = {
    setGreetingPhotos() {
        return instance.get('greetingPhoto')
    },

    getTodayCelebro() {
        return instance.get('todayCelebro')
    },

    saveBirthday(birthdayData) {
        const formData = new FormData();
        formData.append('lastName', birthdayData.lastName);
        formData.append('name', birthdayData.name);
        formData.append('secondName', birthdayData.secondName);
        formData.append('fullBirthDate', birthdayData.fullBirthDate);
        formData.append('depart', birthdayData.depart);
        formData.append('city', birthdayData.city);
        formData.append('img', birthdayData.img);
        formData.append('created', birthdayData.created);
        return instance.post('greetingPhoto', formData);
    },

    findPerson(personData) {
        return instance.get(`greetingPhoto/find`, {
            params: {
                lastName: personData.lastName,
                name: personData.name,
                secondName: personData.secondName
            }
        });
    }
}

// Галлерея
export const galleryAPI = {
    getPhotos() {
        return instance.get(`gallery`)
    }
}

// ========== АПИ для корпоративной жизни ==========

export const corpLifeAPI = {
    // ========== API для соревнования "Календарь 2020"
    getImages() {
        return instance.get(`competition`)
    },

    getLike() {
        return instance.get('like')
    },

    updateCompetition(competitionId, loacalState) {
        return instance.put(`competition/${competitionId}`, loacalState)
    },


    // ====== API для соревнования "Логотип"
    getLogo() {
        return instance.get('bestlogo')
    },

    updateCompetition(competitionId, loacalState) {
        return instance.put(`bestlogo/${competitionId}`, loacalState)
    },

    // ========= Слайдер

    getSliderImages() {
        return instance.get('slider')
    },

    // ============ Видеопоздравления и тп

    getVideo() {
        return instance.get('corpVideo')
    },

    getOtherVideo() {
        return instance.get('otherVideo')
    }
}

// ======= Интервьюшки ==========

export const interviewAPI = {
    getInterview() {
        return instance.get("tournamentInterview")
    }
}


// ======= Вакансии ==========

export const jobAPI = {
    uploadJobList() {
        return instance.get("vacations")
    },

    requireVacationId(vacationId) {
        return instance.get(`vacations/${vacationId}`)
    }
}

// Test API
export const testAPI = {
    getTest() {
        return instance.get(`test`)
    }
}


// ====================== ПСКОВ API =============
export const pskovAPI = {
    getTotalLike() {
        return instance.get('test')
    }
}

// ==================== Счетчики посетителей ==============

export const visitorsCountAPI = {
    requirePageCount() {
        return instance.get('visitorsCount')
    },

    updateCounterValues(pageId, newCounterValues) {
        return instance.put(`visitorsCount/${pageId}`, newCounterValues)
    }
}

// =========== Видео на главной странице

export const mainPageAPI = {
    getGreetingVideo() {
        return instance.get('mainPage')
    }
}