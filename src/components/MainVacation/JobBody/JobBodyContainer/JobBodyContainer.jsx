// import React from 'react';
// import { connect } from 'react-redux';
// import JobBodyItems from './JobBodyItems';
// import {setJob, leaveRequest, setCurrentPageJob, setJobCount, fetching, isJobInPropgress} from '../../../../redux/jobReduser';
// import * as axios from 'axios';

// class JobBodyContainer extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }
    
//     // componentDidMount() {
//     //     axios.get(`/api/vacations/5d51057e8a85b520cc37088b`)
//     //     .then(response => {
//     //         // debugger
//     //         this.props.setJob(response.data)
//     //     })
//     // }

//     render() {
//         // debugger
//         return(
//             <div>
//                 <JobBodyItems {...this.props} />
//             </div>
//         )
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         jobList: state.jobPage.jobList,
//         pageSize: state.jobPage.pageSize,
//         currentPage: state.jobPage.currentPage,
//         totalJobCount: state.jobPage.totalJobCount,
//         isFetching: state.jobPage.isFetching,
//         jobInPropgress: state.jobPage.jobInPropgress
//     }
// }

// export default connect(mapStateToProps, {
//     setJob,
//     leaveRequest,
//     setCurrentPageJob,
//     setJobCount,
//     fetching,
//     isJobInPropgress 
// })(JobBodyContainer);