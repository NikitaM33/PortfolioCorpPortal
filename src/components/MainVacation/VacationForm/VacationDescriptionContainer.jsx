import React from 'react';
import { reduxForm, Field } from 'redux-form';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VacationDescription from './VacationDescription';
import { setDescr } from '../../../redux/jobReduser';
// import { usersAPI } from '../../../api/api';

class VacationDescriptionContainer extends React.Component{

    componentDidMount(){
        let vacationId = this.props.match.params.vacationId;

        axios.get(`/api/vacations/` + vacationId)
        .then(response => {
            // debugger
            this.props.setDescr(response.data);
        })
    }

    render() {     
        const onSubmit = (formData) => {
            // тут отзыв отправляется в базу
            console.log(formData);
            // axios.post(`/api/jobreviews`, formData)
            // .then();
        }   
        // debugger
        return(
            <div>
                <VacationDescription {...this.props} descr={this.props.descr} />
                <ReduxVacationForm onSubmit={onSubmit} /> {/*Этот код нужен для формы*/}
            </div>
        )
    }
}

// Тут форма для отклика
const VacForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/*====== это redux-form_овская handleSubmit????? ==========*/}
            <div>
                <Field component={"input"} name={"firstName"} placeholder={"Имя"} />
            </div>
            <div>
                <Field component={"input"} name={"lastName"} placeholder={"Фамилия"} />
            </div>
            <div>
                <Field component={"input"} name={"dep"} placeholder={"Отдел"} />
            </div>
            <div>
                <Field component={"textarea"} name={"review"} placeholder={"Оставьте отзыв"} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        jobList: state.jobPage.jobList,
        descr: state.jobPage.descr
    }
}

const ReduxVacationForm = reduxForm({ form: 'VacForm' })(VacForm);
let WithUrlDataContainerComponent = withRouter(VacationDescriptionContainer);

export default connect(mapStateToProps, {setDescr})(WithUrlDataContainerComponent);