import React from 'react';
import {connect} from 'react-redux';
import { updateNewAddText, addText, setUsers } from '../../../../../redux/announsmentReducer';
import * as axios from 'axios';


class AddAnnounsmentContainer extends React.Component {
    componentDidMount() {
        axios.get(`/api/users`)
        .then(response => {
            this.props.setUsers(response.data);
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map( u => {
                        return <li key={u.id}>
                            <div>Имя: {u.name}</div>
                            <div>Возраст: {u.age}</div>
                            <div>Отдел: {u.dep}</div>
                            <div>id: {u._id}</div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newAnnounsment: state.AnnounsmentsPage.newAnnounsment,
        newAddText: state.AnnounsmentsPage.newAddText,
        announsmentName: state.AnnounsmentsPage.announsmentName,
        users: state.AnnounsmentsPage.users
    }
}

export default connect(mapStateToProps, {
    updateNewAddText,
    addText,
    setUsers
})(AddAnnounsmentContainer);