import React from 'react';
import style from './Table.module.css';

const Table = () => {
    return (
        <table className={style.tableWrapp}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Утро</th>
                    <th scope="col">Вечер</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row" className={style.thead}>1</th>
                    <td>09 : 00</td>
                    <td>18 : 00</td>
                </tr>

                <tr>
                    <th scope="row" className={style.thead}>2</th>
                    <td>09 : 00</td>
                    <td>18 : 00</td>
                </tr>
                
                <tr>
                    <th scope="row" className={style.thead}>3</th>
                    <td>09 : 00</td>
                    <td>19 : 00</td>
                </tr>

                <tr>
                    <th scope="row" className={style.thead}>4</th>
                    <td></td>
                    <td>21 : 00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;