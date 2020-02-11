// import React from 'react';
// import {connect} from 'react-redux';
// import Profile from './Profile';
// import * as axios from 'axios';
// import {setUserProfile} from '../../redux/profileReduser';

// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         debugger;
//         // что то с аксиос
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(response.data.items);
//             this.props.setTotalUsersCount(response.data.totalCount);
//         });
//     }

//     render(){
//         return<>
//             <Profile {...this.props} />
//         </>
//     }
// }

// let mapStateToProps = (state) => {
//     // debugger;
//     return {
//         profile: state.profilePage.profile
//     }
// }

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);