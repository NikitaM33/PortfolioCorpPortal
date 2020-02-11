import React from 'react';
import style from './Bazar.module.css';
import bazar from '../../../../img/bazarLogo.jpg';
import bazar2 from '../../../../img/baza3.jpg';

const Bazar = () => {
    return (
        <div className={style.bazar}>
            <div className={style.bazarImg}>
                <img src={bazar} alt="Bazar vokzal" className={style.img1} />
                <img src={bazar2} alt="altBazar" className={style.img2} />
            </div>
            <div className={style.bazarDescription}>
                <h4>Кофейня <b>Bazar</b></h4>
                <h2>Вкусно и уютно</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolor. Dolorem error eaque perspiciatis assumenda dolor doloribus explicabo incidunt quisquam beatae consectetur, officia at odit aperiam numquam autem necessitatibus sequi vero! Harum quasi dolores sed aut! Aliquam tempora natus aliquid expedita similique, voluptates voluptatum provident ratione aut beatae mollitia nam, ex non praesentium amet illum minima. Labore maxime, officiis quod facere ab impedit consectetur sequi nisi voluptatem commodi. Excepturi dolorem perspiciatis earum aliquid voluptatem accusantium doloribus rem beatae fuga ea suscipit soluta atque incidunt, tenetur quisquam? Ea quo rem consectetur dignissimos repudiandae distinctio accusamus odio alias suscipit dolor, nobis in minima! Repudiandae ea sequi doloribus repellat excepturi et sapiente, amet esse modi sint, hic necessitatibus at assumenda facilis. Itaque placeat voluptatum sapiente at nisi amet similique expedita minima, sit eius ullam unde consectetur ratione vel molestias non praesentium maxime atque nostrum? Dolorem maxime nulla voluptate magnam perspiciatis, nobis inventore quis?
                </p>
            </div>
        </div>
    )
}

export default Bazar;