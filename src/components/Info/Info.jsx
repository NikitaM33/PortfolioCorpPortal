import React from 'react';
import style from './Info.module.css';
import InfoHeader from './InfoHeader/InfoHeader';
import CollectionContainer from './Collection/CollectionContainer';
import Announsments from './Announsments/Announsments';
import News from './News/News';
import NewWorkerContainer from './NewWorkerContainer/NewWorkerContainer';

const Info = React.memo((props) => {
    return(
        <div className={style.infoWrapper}>
            <div id={"top"}>
                <InfoHeader />
                <CollectionContainer />
                <News />
                <Announsments />
                <NewWorkerContainer />
            </div>
        </div>
    )
})

export default Info;