import React from 'react';
import style from './MainVacation.module.css';
import JobHeader from './JobHeader/JobHeader';
import ActualVacation from './ActualVacation/ActualVacation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getJob, leaveRequest, setCurrentPageJob, setJobCount, fetching, isJobInPropgress} from '../../redux/jobReduser';

class MainVacationContainer extends React.Component{
    componentDidMount() {
        // this.props.getJob();
    }

    render() {
        return(
            <div className={style.wrapper} id={"top"}>
                <div>
                    <JobHeader />
                    <ActualVacation {...this.props} />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        jobList: state.jobPage.jobList,
        pageSize: state.jobPage.pageSize,
        currentPage: state.jobPage.currentPage,
        totalJobCount: state.jobPage.totalJobCount,
        isFetching: state.jobPage.isFetching,
        jobInPropgress: state.jobPage.jobInPropgress
    }
}

let WithURLDataVacation = withRouter(MainVacationContainer);

export default connect(mapStateToProps, {
    getJob,
    leaveRequest,
    setCurrentPageJob,
    setJobCount,
    fetching,
    isJobInPropgress
})(WithURLDataVacation);