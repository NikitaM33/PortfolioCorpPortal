import { jobAPI } from '../api/api';

const SET_JOB_LIST = 'SET_JOB_LIST';
const LEAVE_REQUEST = 'LEAVE_REQUEST';
const SET_CURENT_PAGE_JOB = 'SET_CURENT_PAGE_JOB';
const SET_JOB_COUNT = 'SET_JOB_COUNT';
const IS_FETCH = 'IS_FETCH';
const JOB_IN_PROGRESS = 'JOB_IN_PROGRESS';
const SET_DESCR = 'SET_DESCR';
const SET_VACATION_ID = "SET_VACATION_ID";

let initialState = {
    jobList: [                                
        {
            duties: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem? Porro.",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, saepe soluta nobis fugit minus eius voluptatum incidunt alias dolorum officiis possimus sunt perferendis molestiae laudantium eveniet, iure pariatur quibusdam non?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?"
            ],
            requirements: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                "Lorem ipsum dolor sit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea, laborum non minus quam eaque!"
            ],
            conditions: [
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, saepe soluta nobis fugit minus eius voluptatum incidunt alias dolorum officiis possimus sunt perferendis molestiae laudantium eveniet, iure pariatur quibusdam non?"
            ],
            _id: "1",
            nameOfVacation: "Lorem ipsum dolor sit.",
            vacationDate: "31.12.2019",
            department: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
            additionallyRequirments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea, laborum non minus quam eaque!"
        }
    ],
    descr: null,
    pageSize: 3,
    currentPage: 1,
    totalJobCount: 0,
    isFetching: true,
    jobInPropgress: false,
    vacationDescription: null
};

const jobReduser = (state = initialState, action) => {
    switch(action.type) {
        case SET_JOB_LIST:
            return {
                ...state,
                jobList: action.jobList
            }

        case LEAVE_REQUEST: 
            return {
                ...state,
                job: state.jobList.map(j => {
                    if( j.jobId === action.jobId ) {
                        return { ...j }
                    };
                    return j;
                })
            }

        case SET_CURENT_PAGE_JOB:
            return {
                ...state,
                currentPageJob: action.currentPageJob
            }

        case SET_JOB_COUNT: 
            return {
                ...state,
                jobCount: action.jobCount
            }
        
        case IS_FETCH:
            return {
                ...state,
                isFetch: action.isFetch
            }

        case SET_DESCR:
            return {
                ...state,
                descr: action.descr
            }

        case SET_VACATION_ID:
            if(action.vacationId === "1") {
                return ({
                    ...state,
                    vacationDescription: {
                        duties: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem? Porro.",
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, saepe soluta nobis fugit minus eius voluptatum incidunt alias dolorum officiis possimus sunt perferendis molestiae laudantium eveniet, iure pariatur quibusdam non?",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?"
                        ],
                        requirements: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                            "Lorem ipsum dolor sit.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea, laborum non minus quam eaque!"
                        ],
                        conditions: [
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, saepe soluta nobis fugit minus eius voluptatum incidunt alias dolorum officiis possimus sunt perferendis molestiae laudantium eveniet, iure pariatur quibusdam non?"
                        ],
                        _id: "1",
                        nameOfVacation: "Lorem ipsum dolor sit.",
                        vacationDate: "31.12.2019",
                        department: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem?",
                        additionallyRequirments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea, laborum non minus quam eaque!"
                    }
                })
            }

            // return {
            //     ...state,
            //     vacationDescription: action.vacationId
            // }

        default:
            return state;
    }
}

const setJob = (jobList) => ({type: SET_JOB_LIST, jobList});
export const leaveRequest = (jobId) => ({type: LEAVE_REQUEST, jobId});
export const setCurrentPageJob = (currentPageJob) => ({type: SET_CURENT_PAGE_JOB, currentPageJob});
export const setJobCount = (jobCount) => ({type: SET_JOB_COUNT, jobCount});
export const fetching = (isFetch) => ({type: IS_FETCH, isFetch});
export const isJobInPropgress = (isInProgress) => ({type: JOB_IN_PROGRESS, isInProgress});
export const setDescr = (descr) => ({type: SET_DESCR, descr});
export const setVacationId = (vacationId) => ({type: SET_VACATION_ID, vacationId});

// Thunk creator

export const getJob = () => {
    return (dispatch) => {
        jobAPI.uploadJobList()
        .then(response => {
            dispatch(setJob(response.data));
        });
    };
};

export const setVacations = (vacationId) => {
    return (dispatch) => {
        jobAPI.requireVacationId(vacationId)
        .then(response => {
            dispatch(setVacationId(response.data));
        });
    };
};

export default jobReduser;