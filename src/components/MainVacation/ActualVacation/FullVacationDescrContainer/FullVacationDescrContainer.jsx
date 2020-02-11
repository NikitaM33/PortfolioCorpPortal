import React from 'react';
import style from './FullVacationDescrContainer.module.css';
import { getJob, setVacations, setVacationId } from '../../../../redux/jobReduser';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FullVacation from './FullVacation/FullVacation';

class FullVacationDescrContainer extends React.Component {
    componentDidMount() {
        let vacationId = this.props.match.params.vacationDescrId;
        // this.props.getJob();
        // this.props.setVacations(vacationId);
        this.props.setVacationId(vacationId);
    }

    render() {
        return (
            <div className={style.wrapper} id={"top"}>
                <FullVacation {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        getJob: state.jobPage.jobList,
        vacationDescription: state.jobPage.vacationDescription
    }
}

let WithUrlDataVacation = withRouter(FullVacationDescrContainer);

export default compose(
    connect(mapStateToProps, {
        getJob,
        setVacations,
        setVacationId
    })
)(WithUrlDataVacation);