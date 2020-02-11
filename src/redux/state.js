import feedBackReducer from './feedBackReducer';
import announsementReduser from './announsmentReducer';

let store = {
    _state: {
        feedbackPage: {
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
            
            newPostText: 'Что вам от нас нужно?'
        },

        AnnounsmentsPage: {
            newAnnounsment: [
                {
                    id: 1,
                    name: 'Tony Stark',
                    headline: 'Продаю кастюм',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                },

                {
                    id: 2,
                    name: 'Наташа Романов',
                    headline: 'Найду любую информацию',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                },

                {
                    id: 2,
                    name: 'Brus Wane',
                    headline: 'Куплю вашу фирму',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                }
            ],
            
            oldAnnounsment: [
                {
                    id: 1,
                    name: 'Hulk',
                    headline: 'ХАЛК ВЫЕЗЖАТЬ К ДОЛЖНИКУ!!!',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                },

                {
                    id: 3,
                    name: 'Stive Rogers',
                    headline: 'Не выражаюсь',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                },

                {
                    id: 1,
                    name: 'Selina Kyle',
                    headline: 'Раздаю котят',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                },

                {
                    id: 1,
                    name: 'DeadPool',
                    headline: 'Я бэтмен!',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quis cumque similique, ut cum consectetur quod nisi excepturi? Saepe, alias!'
                }
            ]
        },

        infoPage: {
            pedestal: [
                {
                    id: 1,
                    name: 'Batman',
                    fees: 98 + ' млрд',
                    place: '1 place'
                },

                {
                    id: 1,
                    name: 'Whilson Fisk',
                    fees: 40 + ' млрд',
                    place: '2 place'
                },
                
                {
                    id: 1,
                    name: 'Professor X',
                    fees: 3.5 + ' млрд',
                    place: '3 place'
                }
            ],

            vacation: [
                {
                    id: 1,
                    department: 'call-centr',
                    vacation: 'Оператор',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },
                
                {
                    id: 2,
                    department: 'Выездное взыскание',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },

                {
                    id: 3,
                    department: 'УСВД',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },

                {
                    id: 4,
                    department: 'ДВВиИП',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },
                {
                    id: 3,
                    department: 'УМИОП',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },
                {
                    id: 3,
                    department: 'УР',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },
                {
                    id: 3,
                    department: 'УСВ',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                },
                {
                    id: 3,
                    department: 'УДВиИП',
                    vacation: 'Менеджер',
                    decription: 'Краткое описание вакансии Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis.'
                }
            ],

            announsments: [
                {
                    id: 1,
                    breackingNews: 'Учебная тревога в 14:00',
                    newsText: 'В 14:00 по мск будет проведена учебная пожрная тревога. Просьба всех, по сигналу проследовать к пожарным выходам.'
                },

                {
                    id: 1,
                    breackingNews: 'Поздравление в 12:00',
                    newsText: 'В 12:00 состоится позжравление нашего сотрудника в  большой переговорке.'
                },
                
                {
                    id: 1,
                    breackingNews: 'Продуктовый автомат',
                    newsText: 'Хватит трести продуктовый автомат!!!'
                }
            ]
        },

        newsPage: {
            globalNews: [
                {
                    headline: 'Ёж научился включать телефон с помощью отпечатка лапы',
                    article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, earum nostrum similique quos consectetur minus molestiae aut magni eum dolores.'
                },

                {
                    headline: 'Изобретен первый в мире телепорт',
                    article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, earum nostrum similique quos consectetur minus molestiae aut magni eum dolores.'
                },

                {
                    headline: 'Я знаю что ты это читаешь',
                    article: 'А знаешь ли ты, что мужчины не могут положить правую ладонь себе на правое плечо. Ты попробовал это сделать? Я знаю, что ты попробовал это сделать и с левой рукой)) Это происходит из-за того, что быцепс напрягается и не дает руке полностью согнуться. К слову, девушки могут проделать этот трюк.'
                }
            ],

            corpNews: [
                {
                    headline: 'За сборы можно выиграть кресло!',
                    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis odit reprehenderit explicabo placeat illum obcaecati nobis, facilis voluptatibus incidunt quod tenetur dolorum sint dolorem! Minima, enim magnam eos dolorem ullam est labore soluta aliquid explicabo error delectus exercitationem nam officiis nulla omnis sit earum deserunt at cupiditate numquam ea?'
                },

                {
                    headline: 'Во все кабинеты усьанавливается стационарные телефоны.',
                    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis odit reprehenderit explicabo placeat illum obcaecati nobis, facilis voluptatibus incidunt quod tenetur dolorum sint dolorem! Minima, enim magnam eos dolorem ullam est labore soluta aliquid explicabo error delectus exercitationem nam officiis nulla omnis sit earum deserunt at cupiditate numquam ea?'
                },

                {
                    headline: 'Почему постоянно отключается свет и срабатывает сигнализация?',
                    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis odit reprehenderit explicabo placeat illum obcaecati nobis, facilis voluptatibus incidunt quod tenetur dolorum sint dolorem! Minima, enim magnam eos dolorem ullam est labore soluta aliquid explicabo error delectus exercitationem nam officiis nulla omnis sit earum deserunt at cupiditate numquam ea?'
                },

                {
                    headline: 'Откуда берется вода в помещении?',
                    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis odit reprehenderit explicabo placeat illum obcaecati nobis, facilis voluptatibus incidunt quod tenetur dolorum sint dolorem! Minima, enim magnam eos dolorem ullam est labore soluta aliquid explicabo error delectus exercitationem nam officiis nulla omnis sit earum deserunt at cupiditate numquam ea?'
                },

                {
                    headline: 'В чем смысл учебных пожарных тревог, если все и так хорошо?',
                    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis odit reprehenderit explicabo placeat illum obcaecati nobis, facilis voluptatibus incidunt quod tenetur dolorum sint dolorem! Minima, enim magnam eos dolorem ullam est labore soluta aliquid explicabo error delectus exercitationem nam officiis nulla omnis sit earum deserunt at cupiditate numquam ea?'
                }
            ]    
        }
    },

    _callSubscriber() {
        console.log('state was rerender');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber  = observer;
    },

    dispatch(action) {
        this._state.feedbackPage = feedBackReducer(this._state.feedbackPage, action);
        this._state.AnnounsmentsPage = announsementReduser(this._state.AnnounsmentsPage, action)
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;