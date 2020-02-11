import React, { useState } from 'react';
import style from './PhotoBox.module.css';
import Modal from '../../../../common/Modal/Modal';
import Preloader from '../../../../common/Preloader/Preloader';

const PhotoBox = ({birthdayPhotosList}) => {
    if(!birthdayPhotosList) {
        return <Preloader />
    }

    let [isModalOpen, setIsModalOpen] = useState(false);
    let [currentImages, setCurrentImages] = useState(0);
    let [arrElemLength, setArrElemLength] = useState(0);

    
    let toggleModal = (e) => {

        let arrElem = [];

        for(let i = 0; i < birthdayPhotosList.length; i++) {
            arrElem.push(birthdayPhotosList.indexOf(birthdayPhotosList[i]));
            
            if(e.currentTarget.dataset.index == arrElem[i]) {
                setCurrentImages(arrElem[i]);
            }
        }
        setIsModalOpen(!isModalOpen);
        setArrElemLength(arrElem);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.portfolio}>
                <ul>
                    {birthdayPhotosList == 0 ? <li className={style.ifNoBirthday}><h1>В этом месяце у нас нет именников :(</h1></li>
                        : birthdayPhotosList.map((ps, index) => {
                            return (
                                <div className={style.wrapper} key={ps.id}>
                                    <div className={style.portfolioWrapper}>
                                        <li>
                                            <span className={style.descr} onClick={toggleModal} data-index={index}>
                                                <span>
                                                    {ps.lastName} {ps.name}<br /> {ps.secondName}
                                                </span>
                                                <br />{ps.depart}<br /> {ps.city}<br />
                                                <span>
                                                    {ps.dateOfBirthday}
                                                </span>
                                            </span>
                                            <div className={style.imgWrapper}>
                                                <img src={ps.img} alt="AltImg"/>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>


            {
                isModalOpen && 
                    <Modal onClose={toggleModal} currentImg={currentImages} arrLength={arrElemLength}>
                        {birthdayPhotosList.map((bpm) => {
                            return (
                                <>
                                    <img key={bpm.id} src={bpm.imgBig}alt="Photo" />
                                    <br />
                                    <span key={bpm.id} className={style.modalDescr}>
                                        <span>
                                            {bpm.lastName} {bpm.name}<br /> {bpm.secondName}
                                        </span>
                                        <br />
                                        <h6>
                                            {bpm.depart}
                                        </h6>
                                        <br />
                                        <span>
                                            {bpm.dateOfBirthday}
                                        </span>
                                    </span>
                                </>
                            )
                        })}
                    </Modal>
            }
        </div>
    )
};

export default PhotoBox;