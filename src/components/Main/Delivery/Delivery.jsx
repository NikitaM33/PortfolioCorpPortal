import React from 'react';
import style from './Delivery.module.css';
import Table from './Table/Table';
import Bus from '../../../img/busCut.jpg'

const Delivery = () => {
    return(
        <div className={style.deliveryWrapper} id={"delivery"}>
            <div className={style.tableBox}>
                <div className={style.delivery}>
                    <h4>Корпоративная развозка</h4>
                    <h1>Lorem <b>ipsum</b> dolor <b>sit</b> <br />amet, <b>consectetur.</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quae exercitationem ratione corporis optio nisi sint repudiandae animi voluptatem odit ea obcaecati repellendus molestiae accusantium eius, dolorum sapiente praesentium tenetur!</p>
                    <div>
                        <Table />
                    </div>
                </div>
            </div>
            <div className={style.busImg}>
                <img src={Bus} alt="Тут должен быть автобус" />
            </div>
        </div>
    )
}

export default Delivery;