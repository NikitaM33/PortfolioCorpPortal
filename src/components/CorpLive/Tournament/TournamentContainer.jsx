import React from 'react';
import style from './Tournament.module.css';
import TournamentHeader from './TournamentHeader/TournamentHeader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TournamentInterview from './TournamentInterview/TournamentInterview';
import { getInterview } from '../../../redux/tournamentReduser';
import TournamentTeams from './TournamentTeam/TournamentTeams';

class TournamentContainer extends React.Component {
    componentDidMount() {
        // this.props.getInterview();
    }

    render() {
        return (
            <div className={style.wrapper} id={"top"}>
                <TournamentHeader />
                <TournamentTeams />
                <TournamentInterview { ...this.props } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        interview: state.tournamentPage.interview
    }
}

export default compose(
    connect(mapStateToProps, {
        getInterview
    })
)(TournamentContainer);