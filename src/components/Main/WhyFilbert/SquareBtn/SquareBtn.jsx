import React from 'react';
import style from './SquareBtn.module.css';

const SquareBtn = () => {

    let btnElement = () => {
        alert("Какой-то текст");
    };

    return(
        <div className = {style.buttonRead}>
            {/* <button className = {style.batn} onClick={ btnElement }>Читать</button> */}

            <button type="button" className={style.batn} data-toggle="modal" data-target="#history">
                Читать
            </button>

            <div className="modal fade" id="history" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="history">История Filbert</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis voluptatibus perferendis nemo architecto quia minus accusantium blanditiis, molestias explicabo facere temporibus deleniti quidem! Sint, veritatis tempore! Ipsam, perspiciatis exercitationem? Veritatis voluptatibus eos enim modi, accusamus reiciendis vel? Incidunt, id voluptatum. Officiis a amet libero, nam illum, perspiciatis impedit alias, dicta autem consequuntur voluptas dolorum cumque dolorem esse quaerat minus minima! Error magnam tempora autem, aspernatur quae, quaerat maiores alias minus dolore, velit quam! Laboriosam magni dolorem sed voluptatibus unde illo eos quidem velit! Deleniti ipsam eaque dicta iste libero expedita beatae ipsum autem necessitatibus rerum, nemo inventore assumenda quis quisquam, eligendi eveniet quo modi consequuntur aliquid sed dolor! Maiores veritatis perspiciatis rem consequuntur exercitationem unde repudiandae impedit dolore quas quia, itaque repellat esse, possimus libero hic iusto accusamus placeat natus ut tempora vitae atque aliquam. Deserunt, laborum neque provident, ex officia nihil delectus veniam natus nostrum autem alias amet.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className={style.lilBatn} data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SquareBtn;