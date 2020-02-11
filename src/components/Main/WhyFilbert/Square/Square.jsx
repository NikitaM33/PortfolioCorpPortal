import React from 'react';
import style from './Square.module.css';
import SquareBtn from '../SquareBtn/SquareBtn';

const Square = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.orangeSquare}>
                <h1>История Filbert</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, reprehenderit inventore dicta dolore quo deserunt atque eum, debitis, voluptatibus iusto dolorum a excepturi omnis molestiae. Officiis laborum assumenda nihil. Expedita.</p>
            </div>
            <SquareBtn />
        </div>
    )
}

export default Square;