import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setAuthUserData } from '../../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // if(!userId){
        //     userId = 2;
        // }

        usersAPI.getUsersProfile(this.props.match.params.userId)
        .then(data => {
            // debugger
            this.props.setUserProfile(data);
        });

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });

        usersAPI.getAuthUserData().then(data => {
            if (data.resultCode == 0){
                let { id, email, login } = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
        
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
        //     withCredentials: true
        // }).then(response => {
        //         if(response.data.resultCode === 0) {
        //             let { id, email, login } = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     });
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile = {this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.profilePage.isAuth,
    login: state.profilePage.login
});

let withUrlDataContainerComponent = withRouter(ProfileContainer); // Прокидывает данные из URLa

export default connect(mapStateToProps, {setUserProfile, setAuthUserData})(withUrlDataContainerComponent);