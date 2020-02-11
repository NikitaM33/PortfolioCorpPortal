import React from 'react';
import style from './Moroshka.module.css';
import moroshca from '../../../../img/moroshka.jpeg';
import moroshca2 from '../../../../img/moroshka3.jpeg';

const Moroshka = () => {
    return (
        <div className={style.moroshka}>
            <div className={style.moroshkaDescription}>
                <h4>Столовая <b>Moroshka</b></h4>
                <h2>Вкусно и уютно</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad sunt voluptatum eum nihil omnis eos pariatur magni odio obcaecati totam debitis sit ea, ipsum corporis reprehenderit mollitia eligendi laboriosam quo dignissimos dicta velit? Minus architecto nostrum doloribus. Repellat est nam rem dolore labore veniam quibusdam corporis nulla, esse, laborum autem suscipit quo veritatis cum itaque magnam earum optio fugiat. Doloremque consectetur repudiandae ratione, architecto sequi libero ea consequatur, ullam odio, voluptatem qui mollitia ipsum facere exercitationem dolorem temporibus suscipit consequuntur. Culpa fugiat doloremque nemo rerum a praesentium ipsa magni laudantium, quam inventore totam maxime suscipit nihil dolorum cupiditate modi sequi corporis corrupti eos, esse, mollitia asperiores. Architecto illum beatae, quibusdam explicabo expedita error praesentium nemo necessitatibus ratione neque corrupti nesciunt aspernatur assumenda dolores quas adipisci. Doloremque nisi et fugit suscipit amet dolor excepturi expedita sunt, quis assumenda delectus illum fugiat magnam aperiam odio. Voluptatem delectus tempora reiciendis ipsa deleniti.
                </p>
            </div>
            <div className={style.moroshkaImg}>
                <img src={moroshca} alt="otMoroshka" className={style.img1} />
                <img src={moroshca2} alt="otMoroshka" className={style.img2} />
            </div>
        </div>
    )
}

export default Moroshka;