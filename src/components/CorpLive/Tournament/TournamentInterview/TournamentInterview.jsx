import React from 'react';
import style from './TournamentInterview.module.css';

const TournamentInterview = (props) => {
    return (
        <div className={style.trnmtInterview}>
            <div className={style.trnmtInterviewPresent}>
                <h4>Интервью участников</h4>
                <h1>Турнира</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet voluptates quisquam facilis odio fuga reprehenderit excepturi quis neque sunt?
                </p>
            </div>
            <div className={style.interviewBg}>
                {
                    props.interview.map(dialog => <div key={dialog.id} className={style.interviewWrapper}>
                        <div className={style.intImgWrapper}>
                            <img src={dialog.imageRespondent} alt="img"/>
                        </div>
                        <div className={style.interviewText}>
                            <p>
                                <span className={style.reporter}>
                                    {dialog.reporter[0]}
                                </span> <br />


                                <span className={style.interviewer}>
                                    {dialog.respondent[0]}
                                </span><br />


                                <span className={style.reporter}>
                                    {dialog.reporter[1]}
                                </span><br />


                                <span className={style.interviewer}>
                                    {dialog.respondent[1]}
                                </span><br />


                                <span className={style.reporter}>
                                    {dialog.reporter[2]}
                                </span> <br />
                            </p>

                            <p>

                                <span className={style.interviewer}>
                                    {dialog.respondent[2]}
                                </span><br />


                                <span className={style.reporter}>
                                    {dialog.reporter[3]}
                                </span><br />


                                <span className={style.interviewer}>
                                    {dialog.respondent[3]}
                                </span><br />


                                <span className={style.reporter}>
                                    {dialog.reporter[4]}
                                </span><br /> 


                                <span className={style.interviewer}>
                                    {dialog.respondent[4]}
                                </span><br />


                                <span className={style.reporter}>
                                    {dialog.reporter[5]}
                                </span><br /> 
                            </p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

export default TournamentInterview;