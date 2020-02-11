import { addPostActionCreater } from "./feedBackReducer";
import { newsAPI, testAPI } from '../api/api';
import imgCover from '../img/videoCover/VideoCover.jpg';

const SET_NEWS = "SET_NEWS";
const SET_NEWS_DATA = " SET_NEWS_DATA";
const SET_TEST_IMG = "SET_TEST_IMG";
const ADD_NEW_NEWS = "UPDATE_NEWS";
const SAVE_NEWS_IMG = "SAVE_NEWS_IMG";
const IS_SENDING = "IS_SENDING";

let initialState = {
    news: [
        {
            _id: 1,
            newsHeader: "«Lorem ipsum dolor sit 100»",
            newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
            newsImg: imgCover,
            newsModalImg: "",
            newsVideo: "https://www.youtube.com/watch?v=Ur_tXqaNXOI",
            dateOfpublish: "31.10.2019",
            timeOfPublish: "13:51"
        },

        {
            _id: 2,
            newsHeader: "«Lorem ipsum dolor sit 200»",
            newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
            newsImg: imgCover,
            newsModalImg: "",
            newsVideo: "https://www.youtube.com/watch?v=Ur_tXqaNXOI",
            dateOfpublish: "31.10.2019",
            timeOfPublish: "13:51"
        },

        {
            _id: 3,
            newsHeader: "«Lorem ipsum dolor sit 300»",
            newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
            newsImg: imgCover,
            newsModalImg: "",
            newsVideo: "https://www.youtube.com/watch?v=Ur_tXqaNXOI",
            dateOfpublish: "31.10.2019",
            timeOfPublish: "13:51"
        }
    ],
    imgInput: 'http://192.168.10.185:8080/video/vid.mp4',
    newsDescr: null,
    pageSize: 10,
    totalNewsCount: 0,
    currentPage: 1,
    isFetching: true,
    loadingPageInProcess: false,
    isSending: false
}

const newsReduser = ( state = initialState, action ) => {
    switch(action.type){
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }

        case SET_NEWS_DATA:
            if(action.newsData === "1") {
                return ({
                    ...state,
                    newsDescr: {
                        _id: 1,
                        newsHeader: "«Lorem ipsum dolor sit 100»",
                        newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
                        newsImg: imgCover,
                        newsModalImg: imgCover,
                        newsVideo: "",
                        dateOfpublish: "31.10.2019",
                        timeOfPublish: "13:51"
                    }
                })
            } else if(action.newsData === "2") {
                return {
                    ...state,
                    newsDescr: {
                        _id: 2,
                        newsHeader: "«Lorem ipsum dolor sit 200»",
                        newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
                        newsImg: imgCover,
                        newsModalImg: imgCover,
                        newsVideo: "",
                        dateOfpublish: "31.10.2019",
                        timeOfPublish: "13:51"
                    }
                }
            } else {
                return {
                    ...state,
                    newsDescr: {
                        _id: 3,
                        newsHeader: "«Lorem ipsum dolor sit 300»",
                        newsContent: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati fugiat natus libero. Qui quos nobis inventore placeat saepe explicabo, unde neque voluptates atque, voluptas reiciendis labore vero tempore autem odit dolore, delectus velit ea quia. Ullam ducimus nisi veniam quibusdam. Dolore quo accusamus natus nemo placeat cum. Voluptatem ex blanditiis quos magni aperiam vitae impedit quia, dolores alias odit distinctio sequi quibusdam obcaecati eos ipsum totam libero repellat tempore quod! Iure, facilis debitis reiciendis esse, animi asperiores rem fugit accusantium officiis ipsum molestiae libero, eos similique quo eius quasi ad deleniti distinctio eveniet natus? Similique quia minus vitae facere deserunt veniam, perferendis quis nam, quaerat mollitia, quasi illum quam! Illum explicabo optio iste animi, consequuntur asperiores facilis velit ad suscipit veniam consectetur vero blanditiis recusandae placeat. Nam, molestias amet optio commodi nisi quam, et, distinctio error alias totam quae. Autem unde consequatur placeat quas aliquam amet illum itaque tempore iste quam vitae cumque eius eum reprehenderit consequuntur commodi voluptates sapiente dolorum harum inventore aspernatur, quaerat magnam sequi? Cum magni quas, nemo officiis tenetur soluta optio harum dolorem consequuntur consectetur labore nesciunt libero molestiae quidem possimus fugit inventore, qui vel distinctio, unde aliquam ullam quod porro. Iste laboriosam tempore atque quaerat corrupti consequatur maiores commodi facere minima mollitia. Quibusdam dignissimos fuga, fugiat facilis consectetur autem debitis voluptates, temporibus placeat est corporis totam quae error, maxime nemo aliquam dolore inventore et tempora consequatur possimus distinctio perferendis! Amet rerum alias harum? Quas, autem repellat neque ratione porro, dolores id aut quod similique obcaecati et delectus temporibus officiis blanditiis dolorum iusto tenetur omnis, illum voluptates. Expedita sed quasi mollitia corrupti consectetur. Possimus dignissimos tempora saepe qui? Vero nisi molestiae natus hic libero. Deserunt corporis, recusandae facilis magnam facere cumque delectus natus aliquam totam placeat, autem temporibus inventore est modi quo odit officia assumenda.",
                        newsImg: imgCover,
                        newsModalImg: imgCover,
                        newsVideo: "",
                        dateOfpublish: "31.10.2019",
                        timeOfPublish: "13:51"
                    }
                }
            }
            // return {
            //     ...state,
            //     newsDescr: action.newsData
            // }

        case SET_TEST_IMG:
            return {
                ...state,
                testImg: action.test
            }

        case ADD_NEW_NEWS:
            return {
                ...state,
                news: action.createdNews
            }

        case SAVE_NEWS_IMG:
            return {
                ...state,
                news: {...state.news,
                    newsImg: action.photos
                }
            }

        case IS_SENDING:
            return {
                ...state,
                isSending: action.sendInProgress
            }

        default: 
            return state;
    }
}

const setNews = (news) => ({type: SET_NEWS, news});
export const setNewsData = (newsData) => ({type: SET_NEWS_DATA, newsData});
const setTest = (test) => ({type: SET_TEST_IMG, test});
const addNewNews = (createdNews) => ({type: ADD_NEW_NEWS, createdNews});
const saveNewsImage = (newsImg) => ({type: SAVE_NEWS_IMG, newsImg});
const isSendingSuccess = (sendInProgress) => ({type: IS_SENDING, sendInProgress});

// thunk

export const getNews = () => {
    return (dispatch) => {
        newsAPI.getNews()
        .then(response => {
            dispatch(setNews(response.data));
        })
    }
};

export const getTest = () => {
    return (dispatch) => {
        testAPI.getTest()
        .then(response => {
            dispatch(setTest(response.data));
        });
    };
};

export const createNews = (formValue) => {
    return (dispatch) => {
        newsAPI.appendNews(formValue)
        .then(response => {
            if(Array.isArray(response.data) == true) {
                dispatch(addNewNews(response.data));
            }
        });
    };
};

export const updateNewsList = () => {
    return (dispatch) => {
        newsAPI.getNews()
        .then(response => {
            dispatch(setNews(response.data));
        });
    };
};

export const saveNewsImg = (Formdata) => {
    return (dispatch) => {
        newsAPI.appendNews(Formdata)
        .then(response => {
            dispatch(saveNewsImage(response.data));
        });
    };
};

export const doSending = (value) => (dispatch) => {
    newsAPI.sendEmail(value)
    .then(response => {
        dispatch(isSendingSuccess(response.data));
    });
};

export default newsReduser;