import React from 'react';
import style from './VacationItem.module.css';
import HeaderVacationForm from './HeaderVacationForm';
import VacationDescriptionContainer from './VacationDescriptionContainer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class VacationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dep: '',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleText(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleClick() {
        axios.post(`/api/users`, {}, {
            withCredentials: true
        })
        // .then(response)

        // console.log(this.state); //тут отправляем данные из формы в базу
        // Бюджетный файл-сервер и настройка к нему доступ через Интернет. Наш опыт!
    }

    render() {
        return(
            <div className={style.formContainer}>
                <HeaderVacationForm />
                <VacationDescriptionContainer {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        jobList: state.jobPage
    }
}

export default connect(mapStateToProps)(VacationForm);