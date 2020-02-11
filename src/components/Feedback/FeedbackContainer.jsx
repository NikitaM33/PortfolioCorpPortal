import React from 'react';
import {connect} from 'react-redux';
// import UsersAPIComponent from './Users/UsersAPIComponent';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from '../../redux/fbUsersReducer';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.data.items);
        //         this.props.setTotalUsersCount(response.data.totalCount);
        //     });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items)
                });

        
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.data.items)
        //     });
    }

    render() {
        return <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUserCount = { this.props.totalUserCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onPageChange = { this.onPageChange }
                        users = { this.props.users }
                        follow = { this.props.follow }
                        unfollow = { this.props.unfollow } />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.fbUsersPage.users,
        pageSize: state.fbUsersPage.pageSize,
        totalUserCount: state.fbUsersPage.totalUserCount,
        currentPage: state.fbUsersPage.currentPage,
        isFetching: state.fbUsersPage.isFetching
    }    
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);