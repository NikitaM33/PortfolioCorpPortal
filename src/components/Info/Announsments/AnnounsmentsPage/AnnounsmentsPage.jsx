import React from 'react';
import style from './AnnounsmentsPage.module.css';
import NewAnnounsContainer from './NewAnnouns/NewAnnounsContainer';
import AddAnnounsmentContainer from './AddAnnounsmentContainer/AddAnnounsmentContainer';

const AnnounsmentsPage = (props) => {
    return(
        <div className={style.announsmentsPageWrapper} id={"top"}>
            <div className={style.headerUsersAnnouns}>
                <h2>Доска объявлений</h2>
                <h1>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Doloribus, repudiandae.</h1>
            </div>
            <AddAnnounsmentContainer />
            <NewAnnounsContainer />
        </div>
    )
}

export default AnnounsmentsPage;