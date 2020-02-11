import React, { useState } from 'react';
import style from './newWorkerSlide.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import Modal from '../../../common/Modal/Modal';

const NewWorker = ({newWorkersList}) => {
    let [ isModalOpen, setIsModalOpen] = useState(false);
    let [ currentImages, setCurrentImages ] = useState(0);
    let [ arrElemLemgth, setArrElemLength ] = useState(0);

    if(!newWorkersList) {
        return <Preloader />
    }

    let toggleModal = (e) => {
        let arrElem = [];
        for(let i = 0; i < newWorkersList.length; i++) {
            arrElem.push(newWorkersList.indexOf(newWorkersList[i]));

            if(e.currentTarget.dataset.index == arrElem[i]) {
                setCurrentImages(arrElem[i]);
            }
        }
        setIsModalOpen(!isModalOpen);
        setArrElemLength(arrElem);
    }

    return(
        <div className={style.wrapper}>
            <div className={style.slideContainer}>
                <ul className={style.newWorkerWrapper}>
                    {newWorkersList ? newWorkersList.map((nwl, index) => {
                        return(
                            <>
                                <li key={nwl.id} className={style.newWorkerContainer} onClick={toggleModal}data-index={index}>
                                    <div>
                                        <span className={style.gradientCover}></span>
                                        <img src={nwl.img} alt="No image"/>
                                    </div>
                                    
                                    <span className={style.descr}>
                                        <span>
                                            {nwl.firstName} {nwl.lastName}
                                        </span>
                                        <hr />
                                        {nwl.introdusing}
                                    </span>
                                </li>
                            </>
                        ) 
                    }) : <h1 className={style.noWorker}>Пока что у нас нет новых сотрудников</h1>
                    }
                </ul>
            </div>

            {
             isModalOpen && 
                <Modal onClose={toggleModal} currentImg={currentImages} arrLength={arrElemLemgth}>
                    {newWorkersList.map(nw => {
                        return (
                            <div key={nw.id} className={style.modalContainer}>
                                <img src={nw.imgBig} alt="Photo"/>
                                <br />
                                <span className={style.modalDescr}>
                                    <span className={style.modalSpanName}>
                                        {nw.firstName} {nw.lastName}
                                    </span>
                                    <br />
                                    <span className={style.modalSpanIntro}>
                                        {nw.introdusing}
                                    </span>
                                </span>
                            </div>
                        )
                    })}
                </Modal> 
            }
        </div>
    )
}

export default NewWorker;