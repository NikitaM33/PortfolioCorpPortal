const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myPosts: [
        {
            id: 1,
            name: 'Иван',
            message: 'Ни какого тебе отпуска!'
        }
    ],

    apponentPosts: [
        {
            id: 2,
            name: 'Василий',
            message: 'Можно мне в отпуск?'
        }
    ],
    
    newPostText: ''
};

// нужно скорее всего удалить

const feedBackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                name: 'Иван',
                message: state.newPostText
            };

            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
                newPostText: ''
            };
        };

        case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                };
        }

        default: return state;
    };
};

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => 
                ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default feedBackReducer;